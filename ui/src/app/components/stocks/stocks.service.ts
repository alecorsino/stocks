import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class StocksService implements OnInit {

  results: any;

  constructor(private http: HttpClient) { }

  
  // getStocks (): Observable<Sstock[]> {
  //   return this.http.get<Stock[]>(url)
  // }

 

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:7000/api/articulos').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
      console.log('[STOCK]', data);
      
    });
  }
}

