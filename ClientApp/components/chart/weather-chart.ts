import { Component, Input, OnChanges } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'weather-chart',
    directives: [CHART_DIRECTIVES],
    styles: [`chart {display: block;}`],
    template: require('./weather-chart.html')
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
            xAxis: {
                categories: []
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
        if(this.chart !== undefined)
            this.Refresh(); 
    }
    Refresh(){
        console.log(this.myData.y); 
        this.chart.xAxis[0].setCategories(this.myData.x ); 
        this.chart.series[0].setData(this.myData.data); 
    }
}