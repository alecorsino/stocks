import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ArticuloService {

  constructor() { }

  
  // getStocks (): Observable<Articulo[]> {
  //   return this.http.get<Articulo[]>(url)
  // }

}
