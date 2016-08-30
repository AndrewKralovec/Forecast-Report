import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForcastService } from '../../services/forecastService.ts';


@Component({
    selector: 'weather',
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    providers: [ForcastService], 
    template: require('./weather.html')
})
export class Weather {
    private data:any; 
    private forecast:Forecast; 
    // Default location coordniates 
    private location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    constructor(public fs:ForcastService){
        fs.getForcast(this.location.latitude,this.location.longitude)
        .subscribe(result => {
            this.forecast = result ;
            console.log(this.forecast);
        }); 
    }
    search(latitude: any, longitude: any){
        this.fs.getForcast(latitude,longitude)
            .subscribe(result => {
                this.forecast = result ;
                console.log(this.forecast);
            });
    }
    dateFormat(unix:number){
        return new Date(unix * 1000); 
    }
}
