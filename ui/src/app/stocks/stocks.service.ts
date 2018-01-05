import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
//OLD MODULE in V2 // import { HttpModule } from '@angular/http';

@Injectable()
export class StocksService  {

  constructor(private http: HttpClient) { }

  
  getAllStocks (): Observable<any> {
      return this.http.get('http://localhost:7000/api/articulos')
      .pipe(
          catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(`[SERVER ERROR] ${JSON.stringify(error)}`); 
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
}

}

