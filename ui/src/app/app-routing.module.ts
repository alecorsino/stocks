import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from "@angular/common";

/*
  Top Level 'Page' Components declared into this module
*/
import { StocksComponent } from './components/stocks/stocks.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stocks', component: StocksComponent}
]

@NgModule({
  imports:[ 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[
    HomeComponent,
    StocksComponent
  ],
  exports: [ 
    RouterModule,
    HomeComponent,
    StocksComponent
   ]
})
export class AppRoutignModule { }
