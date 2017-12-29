import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './framework/icon-button/icon-button.component';
import { MessageComponent } from './framework/messages/message.component';
import { MessageService } from './framework/messages/message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    IconButtonComponent,
    MessageComponent
  ],
  providers: [MessageService],
  declarations: [
    IconButtonComponent,
    MessageComponent

  ] 
})

export class FrameworkModule  {

}