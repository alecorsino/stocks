import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutignModule } from './app-routing.module';
import { FrameworkModule } from './framework/framework.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutignModule,
    FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   {
  

 }
