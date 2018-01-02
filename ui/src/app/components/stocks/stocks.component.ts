import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../../model/stock';
import { MessageService } from '../../modules/framework/messages/message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.styl']
})
export class StocksComponent implements OnInit {
  
  results: any;
  
  constructor(private http: HttpClient,
              private messageService: MessageService,
              private route: ActivatedRoute) { 


                // const url: Observable<string> = route.url.map(segments => segments.join(''));
  }

  

  private log(message: string) {
    this.messageService.add(`Stocks:  ${message}`);
  }

  ngOnInit() {
     // Make the HTTP request:
     this.http.get('http://localhost:7000/api/articulos').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log('[STOCK]', data);
      
    });
    this.log('[INIT]');
    this.log('No Stocks');
  }

  
}
