import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../framework/messages/message.service';


@Component({
  selector: 'configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.styl']
})
export class ConfiguracionComponent implements OnInit {
  
  constructor(private http: HttpClient) { 


  }


  ngOnInit() {
  }

}
