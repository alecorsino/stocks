import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { IconButtonComponent } from './components/framework/icon-button/icon-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    IconButtonComponent
    ArticuloComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
