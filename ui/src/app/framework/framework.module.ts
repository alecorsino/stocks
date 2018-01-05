import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { MessageComponent } from './messages/message.component';
import { MessageService } from './messages/message.service';

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