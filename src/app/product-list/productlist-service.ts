import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config1 {
   
    "catname": "string",
    "image": "string",
   
  }
  export interface Config {
   
    "pName": "string",
    "pTypes": Config1[],
   
  }

@Injectable()
export class ProductListConfigService {
  configUrl = 'assets/config2.json';
  constructor(private http: HttpClient) { }

  getConfigResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl, { observe: 'response' }); 
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
}