import { Component, Input } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'weather-chart',
    directives: [CHART_DIRECTIVES],
    template: `<div *ngIf="myData">
                <chart [options]="options"
                    (load)="saveInstance($event.context)">
                </chart>
                <div>
                    <button (click)="test()">Test</button>
                </div>
               </div>`, 
    styles: [`
      chart {
        display: block;
      }
    `]
})
export class WeatherChart {
    @Input()
    myData: Array<String>;
       constructor() {
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'},
          series: [{ data: [2,3,5,8,13] }]
        };
    }
    chart : HighchartsChartObject;
    options: HighchartsOptions;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}