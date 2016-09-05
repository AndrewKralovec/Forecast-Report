import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForecastService } from '../../services/forecastService.ts';
import { LoginService } from '../../services/login-service';
import { Icon } from '../../pipes/icon';


@Component({
    selector: 'weather',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [ForecastService, LoginService], 
    pipes:[Icon],
    template: require('./weather.html')
})
export class Weather {
    // Current ForecastS
    public forecast:Forecast; 
    public address:string; 
    public datetime:string; 
    // Default location coordniates 
    public location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    constructor(private fs:ForecastService, private ls: LoginService){
        fs.getForcast(this.location)
        .subscribe(result => {
            this.forecast = result ;
            console.log(this.forecast);
        }); 
    }
    search(lat: any, lng: any){
        console.log("search"); 
        console.log(this.datetime); 
        this.location = {
            latitude:lat, 
            longitude:lng,
            date:this.unixFormat(this.datetime)
        }; 
        this.fs.getForcast(this.location)
        .subscribe(result => {
            this.forecast = result ;
            console.log(this.forecast);
        });
        this.ls.save(this.location); 
    }
    searchAddress(){
        this.fs.getGeocode(this.address)
        .subscribe(result => {
            if(result.results[0] !== null ){
                this.search(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng); 
            }else{
                alert("Could not find Address Please try again");
            }
         });
    }
    dateFormat(unix:number){
        return new Date(unix * 1000); 
    }
    unixFormat(date:string){
        if(date == null || date == undefined)
            return null; 
        date = date.substring(0, date.indexOf('T'));
        return Math.round(new Date(date).getTime()/1000); 
    }
}