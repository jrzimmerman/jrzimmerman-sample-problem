import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

import { Stock } from '../stock';

@Component({
  selector: 'app-chart',
  providers: [StockService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options: Object;
  stocks: Stock[];
  mode = 'Observable';

  constructor(private stockService: StockService ) { }

  ngOnInit() { this.getStocks(); }

  getStocks() {
    this.stockService.getStocks().subscribe(stocks => this.stocks = stocks);
    console.log('stocks: ', this.stocks);
    this.options = {
      title : { text: 'Closing Stock Price Over Time' },
      series: this.stocks,
      xAxis: { title: { text: 'Date' } },
      yAxis: { title: { text: 'Closing Price' } },
    };
  }

}
