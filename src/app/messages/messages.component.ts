import { Component } from '@angular/core';
import {MessageService} from '../message.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }
}
