
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { ChatService } from './chat.service';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ChatbotComponent],
  providers: [ChatService],
})
export class AngularBotModule {}