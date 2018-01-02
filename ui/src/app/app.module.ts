import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutignModule } from './app-routing.module';
// import { MessageService } from './modules/framework/messages/message.service';
import {FrameworkModule} from './modules/framework.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutignModule,
    HttpClientModule,
    FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   {
  

 }
