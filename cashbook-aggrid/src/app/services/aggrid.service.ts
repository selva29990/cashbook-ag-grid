import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AggridService {

  endpoint = 'https://www.ag-grid.com/example-assets/row-data.json';

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  handleError(httpError: HttpErrorResponse) {
    let message = 'Something went wrong !';
    console.log(httpError);
    return message;
  }
}
