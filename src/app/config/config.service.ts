import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
    "id": "number",
    "pName": "string",
    "image": "string"
  }

@Injectable()
export class ConfigService {
  configUrl = 'assets/config1.json';
  constructor(private http: HttpClient) { }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
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