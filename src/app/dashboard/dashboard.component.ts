import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {RouterLink} from '@angular/router';
import {HeroSearchComponent} from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf,
    RouterLink,
    HeroSearchComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
