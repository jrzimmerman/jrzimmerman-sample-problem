import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Stock } from './stock';

@Injectable()
export class StockService {
  private stocksUrl = 'api/stocks';

  constructor(private http: Http) {}

  getStocks(): Observable<any> {
    return this.http.get(this.stocksUrl)
               .map(this.extractData);
  }

  private extractData(res: Response) {
    const body = res.json();
    const options = {
      title : { text: 'Closing Stock Price Over Time' },
      series: body || { },
      xAxis: { title: { text: 'Date' } },
      yAxis: { title: { text: 'Closing Price' } },
    };
    console.log('service options: ', options);
    // return body || {};
    return options;
  }

}
