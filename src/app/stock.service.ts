import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Chart } from './chart';

@Injectable()
export class StockService {
  private stocksUrl = 'api/stocks';

  constructor(private http: Http) {}

  getStocks(): Observable<Chart> {
    return this.http.get(this.stocksUrl)
               .map(this.extractData);
  }

  // extract data will format the data to be used by highcharts
  private extractData(res: Response) {
    const body = res.json();
    const companies = Object.keys(body) || [];
    const seriesData = [];
    companies.forEach(company => {
      seriesData.push({
        name: company.toString().toUpperCase(),
        data: body[company].Close,
        allowPointSelect: true
      });
    });
    const options = {
      title : { text: 'Closing Stock Price Over Time' },
      series: seriesData || [],
      xAxis: { categories: body[companies[0]].Date || [] },
      yAxis: { title: { text: 'Closing Price' } },
    };
    return options;
  }

}
