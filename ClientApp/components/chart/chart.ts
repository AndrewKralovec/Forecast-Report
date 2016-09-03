import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WeatherChart } from './weather-chart';

import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForecastService } from '../../services/forecastService.ts';
import { ChartObject } from '../../models/chart-object';

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
    private dateSet:ChartObject; 
    private tempSet:Array<any> = new Array();
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
    constructor(private fs:ForecastService){
        fs.getForcast(this.location)
        .subscribe(result => {
            this.forecast = result ;
            this.dateSet = {
                x : this.timeSet(result.daily.data), 
                y : "",
                data : []
            }; 
        }); 
    }
    onChange(value) {
        console.log("Select: "+value);
        this.dateSet = {
            x : this.dateSet.x, 
            y : this.selectedSet.key,
            data : this.formatSet(this.forecast.daily.data,value)
        };
        
    }
    formatSet(block:Array<any>, prop:string){
        let result:any = new Array();
        for (let i of block) {
            result.push(i[prop]); 
        }
        return result; 
    }
    timeSet(block:Array<any>){
        let result:any = new Array();
        for (let i of block) {
            result.push(this.fs.weekday[new Date(i['time'] * 1000).getDay()]); 
        }
        return result; 
    }
}
