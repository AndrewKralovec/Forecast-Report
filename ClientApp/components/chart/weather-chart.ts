import { Component, Input, OnChanges } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

@Component({
    selector: 'weather-chart',
    directives: [CHART_DIRECTIVES],
    styles: [`chart {display: block;}`],
    template: require('./weather-chart.html')
})
export class WeatherChart  {
    // Parent chart data 
    @Input() myData: any;
    private chart : HighchartsChartObject;
    private options: HighchartsOptions;
    // Load in initial chart options
    ngOnInit() {
        this.options = {
            title : { text : 'Weather chart' },
            yAxis: {
                title: {
                    text: ''
                }
            },
            xAxis: {
                categories: []
            },
            series: [{
                data: [],
            }]
        };
    }
    // Allow chart changes
    saveInstance(chartInstance:any) {
        this.chart = chartInstance;
    }
    // Refresh on parent data changes 
    ngOnChanges(){
        if(this.chart !== undefined)
            this.Refresh(); 
    }
    // Refresh chart propertys 
    Refresh(){
        this.chart.xAxis[0].setCategories(this.myData.x); 
        this.chart.yAxis[0].setTitle({ text: this.myData.y }); 
        this.chart.series[0].setData(this.myData.data); 
    }
}