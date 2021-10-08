import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StocksDetails } from './StocksDetails';

@Injectable({
  providedIn: 'root'
})


export class StocksserviceService {

  private apiServerUrl = "http://localhost:8071";

  constructor(private http: HttpClient) { }

  public getStocksDetails(): Observable<StocksDetails[]>{
    return this.http.get<any>(`${this.apiServerUrl}/stocks/getstocksdetails`);
}
}
