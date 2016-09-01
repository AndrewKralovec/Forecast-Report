import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WeatherChart } from './weather-chart';

import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForecastService } from '../../services/forecastService.ts';

interface Series {
   key:string; 
   value:string; 
}

@Component({
    selector: 'weather-chart',
    directives: [WeatherChart],
    providers: [ForecastService], 
    template: require('./chart.html')
})
export class Chart {
    // Current ForecastS
    private forecast:Forecast; 
    private dateSet:Array<string> = ["one","two","three"]; 
    private tempSet:Array<any>; 
    // Weather series data options
    private seriesSet:Array<Series> = [
        { key:"Max Tempature", value:"temperatureMax" },
        { key:"Min Tempature", value:"temperatureMin" },
        { key:"Pressure", value:"pressure" },
        { key:"Humidity", value:"humidity" },
        { key:"Wind Speed", value:"windSpeed" },
    ]; 
    private selectedSet:Series = this.seriesSet[0]; 
    // Default location coordniates 
    private location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    constructor(public fs:ForecastService){
    }
    onChange(deviceValue) {
        console.log("Select: "+deviceValue);
    }
    formatSet(block:Array<any>){
        this.dateSet = new Array();
        this.tempSet = new Array();
        for (let i of block) {
            this.tempSet.push(i.apparentTemperatureMax); 
            this.dateSet.push(i['time']); 
        }
    }
}
