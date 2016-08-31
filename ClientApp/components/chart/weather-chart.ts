import { Component, Input } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'weather-chart',
    directives: [CHART_DIRECTIVES],
    template: `<chart [options]="options"></chart>`, 
    styles: [`
      chart {
        display: block;
      }
    `]
})
export class WeatherChart {
    public options: Object;
    constructor() {
        this.options = {
            title : { 
                text : 'Weather chart'
            },
            yAxis: {
                title: {
                    text: 'Tempature'
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [-10, -5, 0, 28, 35, 65, 85, 90, 5, -5],
                zones: [{
                        value: 0,
                        color: '#00ccff'
                    },{
                        value: 32,
                        color: '#ffff00'
                    },{
                        value: 60,
                        color: '#ff9933'
                    },{
                        value: 80,
                        color: '#ff3300'
                    },{
                        color: '#ff3300'
                    }]
            }]
        };
    }     
}