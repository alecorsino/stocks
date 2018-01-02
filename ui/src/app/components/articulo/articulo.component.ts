import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from '../../model/articulo';
import { MessageService } from '../../modules/framework/messages/message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.styl']
})
export class ArticuloComponent implements OnInit {
  
  constructor(private http: HttpClient,
              private messageService: MessageService,
              private route: ActivatedRoute) { 


                // const url: Observable<string> = route.url.map(segments => segments.join(''));
  }

  

  private log(message: string) {
    this.messageService.add(`Stocks:  ${message}`);
  }

  ngOnInit() {
    this.log('[INIT]');
    this.log('No Stocks');
  }

}
