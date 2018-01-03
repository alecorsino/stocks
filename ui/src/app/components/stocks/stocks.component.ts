import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../../model/stock';
import { MessageService } from '../../modules/framework/messages/message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {StocksService} from './stocks.service'
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.styl']
})
export class StocksComponent implements OnInit, OnDestroy {
  
  subscriptions: Subscription
  stocks: any;
  
  constructor(private stockService: StocksService,
              private http: HttpClient,
              private messageService: MessageService,
              private route: ActivatedRoute) {  }


  private log(message: string) {
    this.messageService.add(`[STOCKS] ${message}`);
  }

  ngOnInit() {
    this.subscriptions = this.stockService.getAllStocks()
      .subscribe( 
        data => {
          this.stocks = data;
          this.log(`recieved: ${data.length}`);
        },
        error => {
          this.log(`error en la API ${error}`);
        });
    
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  getStockByID(id:string){
    // const subs =

    // this.subscriptions.add(subs);

  }

  
}
