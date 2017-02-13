import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Stock } from './stock';

@Injectable()
export class StockService {
  private stocksUrl = 'api/stocks';

  constructor(private http: Http) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get(this.stocksUrl)
               .map(this.extractData);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log('body: ', body);
    return body.data || { };
  }

}
