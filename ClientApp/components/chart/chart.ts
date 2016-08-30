import { Component }        from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts'; 

@Component({
    selector: 'my-chart',
    directives: [CHART_DIRECTIVES],
    template: require('./chart.html'),
    styles: [`
      chart {
        display: block;
      }
    `]
})
export class Chart {
    constructor() {
        this.options = {
            title : { text : 'Weather chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}