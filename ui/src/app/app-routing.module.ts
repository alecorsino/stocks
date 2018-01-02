import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
  Top Level 'Page' Components declared into this module
*/
import { ArticuloComponent } from './components/articulo/articulo.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articulos', component: ArticuloComponent}
]

@NgModule({
  imports:[ 
    RouterModule.forRoot(routes)
  ],
  declarations:[
    HomeComponent,
    ArticuloComponent
  ],
  exports: [ 
    RouterModule,
    HomeComponent,
    ArticuloComponent
   ]
})
export class AppRoutignModule { }
