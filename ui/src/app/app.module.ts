import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { IconButtonComponent } from './components/framework/icon-button/icon-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
