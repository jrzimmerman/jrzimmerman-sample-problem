import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Observable } from 'rxjs/Observable';
import { Stock } from '../stock';

@Component({
  selector: 'app-chart',
  providers: [StockService],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options: Observable<any>;

  constructor(private stockService: StockService ) { }

  // on init get stock data from server
  ngOnInit() { this.getStocks(); }

  // pass stock data to highcharts component
  getStocks() {
    this.stockService.getStocks().subscribe(stocks => {
      return this.options = stocks;
    });
  }

}
