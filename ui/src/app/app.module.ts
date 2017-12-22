import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { IconButtonComponent } from './framework/icon-button/icon-button.component';
import { AppRoutignModule } from './app-routing.module';
import { MessageComponent } from './framework/messages/message.component';
import { MessageService } from './framework/messages/message.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ConfiguracionComponent,
    IconButtonComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutignModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
