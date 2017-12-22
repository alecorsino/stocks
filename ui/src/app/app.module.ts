import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { IconButtonComponent } from './components/framework/icon-button/icon-button.component';
import { AppRoutignModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
