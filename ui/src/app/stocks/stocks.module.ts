import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { StocksComponent } from './stocks.component';
import { StocksService} from './stocks.service';

const routes: Routes = [
  { path: '', component: StocksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StocksComponent
  ],
  providers:[
    StocksService
  ]
})
export class StocksModule { }
