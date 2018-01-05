import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule}  from '@angular/common/http';


const routes: Routes = [
  {path: '', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'stocks', loadChildren: 'app/stocks/stocks.module#StocksModule'}
]

@NgModule({
  imports:[ 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[
    
  ],
  exports: [ 
    RouterModule,
    
   ],
   providers:[
    
   ]
})
export class AppRoutignModule { }
