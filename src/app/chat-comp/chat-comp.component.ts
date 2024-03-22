import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { ChatMessage } from '../chat-message';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.scss']
})
export class ChatCompComponent {

 constructor(private chatService:ChatServiceService){}

  model = new ChatMessage("");
  
  messageList: string[] = [];

  sendMessage(): void {
    console.log(this.model.msg)
    this.chatService.sendMessage(this.model.msg)
    this.model.msg = "";
  };

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message:string)=> {
      this.messageList.push(message);
    })
  }

  submitted = false;

  onSubmit() { 
    this.sendMessage()
    this.submitted = true;
   }

}
