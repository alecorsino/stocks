import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from '../../model/articulo';
import { MessageService } from '../../modules/framework/messages/message.service';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.styl']
})
export class ArticuloComponent implements OnInit {
  
  constructor(private http: HttpClient,
              private messageService: MessageService) { 


  }

  private log(message: string) {
    this.messageService.add(`Stocks:  ${message}`);
  }

  ngOnInit() {
    this.log('[INIT]');
    this.log('No Stocks');
  }

}
