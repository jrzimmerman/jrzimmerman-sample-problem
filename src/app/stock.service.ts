import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  stocks: Array<any>;
  constructor() {
    this.stocks = [{
        name: 'AAPL',
        data: [2, 3, 5, 8, 13],
        allowPointSelect: true
      }, {
        name: 'IBM',
        data: [-2, -3, -5, -8, -13],
        allowPointSelect: true
      }];
  }

  getStocks() {
    return this.stocks;
  }

}
