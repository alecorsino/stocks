import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class StocksService  {

  constructor(private http: HttpClient) { }

  
  getAllStocks (): Observable<any> {
      return this.http.get('http://localhost:7000/api/articulos');
  }

}

