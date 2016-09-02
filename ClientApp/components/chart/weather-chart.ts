import { Component, Input, OnChanges } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'weather-chart',
    directives: [CHART_DIRECTIVES],
    template: `<div *ngIf="myData">
                <chart [options]="options"
                    (load)="saveInstance($event.context)">
                </chart>
               </div>`, 
    styles: [`
      chart {
        display: block;
      }
    `]
})
export class WeatherChart  {
    @Input() myData: any;
    private chart : HighchartsChartObject;
    private options: HighchartsOptions;
       ngOnInit() {
        console.log("New init");
        console.log("Data "+this.myData);
        this.options = {
            title : { text : 'Weather chart' },
            yAxis: {
                title: {
                    text: 'Tempature '
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [],
            }]
        };
    }
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
    ngOnChanges(){
        if(this.chart !== undefined){
            this.Refresh(); 
        }
    }
    Refresh(){
        this.chart.xAxis[0].setCategories(this.myData.x ); 
        this.chart.yAxis[0].setTitle({ text: this.myData.y }); 
        this.chart.series[0].setData(this.myData.data); 
    }
}