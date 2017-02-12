import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor() {
    this.options = {
      title : { text : 'Closing Stock Price Over Time' },
      series: [{
        name: 'AAPL',
        data: [2,3,5,8,13],
        allowPointSelect: true
      },{
        name: 'IBM',
        data: [-2,-3,-5,-8,-13],
        allowPointSelect: true
      }]
    };
  }
  options: Object;

  ngOnInit() {
  }

}
