import { Component, OnInit, OnDestroy } from '@angular/core';

import { Stock } from '../model/stock';
import { MessageService } from '../framework/messages/message.service';
import { ActivatedRoute } from '@angular/router';

import {StocksService} from './stocks.service'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.styl']
})
export class StocksComponent implements OnInit, OnDestroy {
  
  stocks: any;
  
  constructor(private stockService: StocksService,
              private messageService: MessageService,
              private route: ActivatedRoute) {  }


  private log(message: string) {
    this.messageService.add(`[STOCKS] ${message}`);
  }

  ngOnInit() {
    this.stocks = this.stockService.getAllStocks();
  }

  ngOnDestroy(){

  }

  getStockByID(id:string){
    // const subs =

    // this.subscriptions.add(subs);

  }

  
}
