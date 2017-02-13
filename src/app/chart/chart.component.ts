import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-chart',
  providers: [StockService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  options: Object;
  stocks: Array<any>;
  constructor(private _stockService: StockService ) {
    this.stocks = this._stockService.getStocks();
    this.options = {
      title : { text: 'Closing Stock Price Over Time' },
      series: this.stocks,
      xAxis: { title: { text: 'Date' } },
      yAxis: { title: { text: 'Closing Price' } },
    };
  }

  ngOnInit() {
  }

}
