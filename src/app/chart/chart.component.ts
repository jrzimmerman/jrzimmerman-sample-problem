import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Chart } from '../chart';

@Component({
  selector: 'app-chart',
  providers: [StockService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options: Chart;

  constructor(private stockService: StockService) { }

  // on init get stock data from server
  ngOnInit() { this.getStocks(); }

  // pass stock data to highcharts component
  getStocks() {
    this.stockService.getStocks().subscribe(stocks => (
      this.options = stocks
    ));
  }
}
