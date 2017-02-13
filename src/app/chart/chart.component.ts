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

  ngOnInit() { this.getStocks(); }

  getStocks() {
    this.stockService.getStocks().subscribe(options => {
      console.log('component options: ', options);
      return this.options = options;
    });
  }

}
