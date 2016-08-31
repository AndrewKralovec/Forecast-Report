import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WeatherChart } from './weather-chart';

import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForecastService } from '../../services/forecastService.ts';

@Component({
    selector: 'weather-chart',
    directives: [WeatherChart],
    providers: [ForecastService], 
    template: require('./chart.html')
})
export class Chart {
    // Current ForecastS
    private forecast:Forecast; 
    private dataSet:any; 
    // Default location coordniates 
    private location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    constructor(public fs:ForecastService){
        fs.getForcast(this.location.latitude,this.location.longitude)
        .subscribe(result => {
            this.forecast = result ;
            console.log(this.forecast);
            this.dataFormat(result.daily.data); 
        }); 
    }
    dataFormat(block:Array<Object>){
        for (let i of block) {
        console.log(i); // "4", "5", "6"
        }
    }
}
