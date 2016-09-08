import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Forecast } from '../../models/forecast';
import { Location } from '../../models/location';
import { ForecastService } from '../../services/forecast.service.ts';
import { LoginService } from '../../services/login.service';
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
    private forecast:Forecast; 
    private address:string; 
    private datetime:string; 
    private message:boolean = false; 
    // Default location coordniates 
    private location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    // Load in a default location 
    constructor(private fs:ForecastService, private ls: LoginService){
        fs.getForcast(this.location)
        .subscribe(result => {
            this.forecast = result ;
        }); 
    }
    // Get Forecast information given entered lat/lng, if valid
    search(latitude: any, longitude: any){
        if(parseFloat(latitude) && parseFloat(longitude)){
            this.location = {
                latitude:latitude, 
                longitude:longitude,
                date:this.unixFormat(this.datetime)
            }; 
            this.fs.getForcast(this.location)
            .subscribe(result => {
                this.forecast = result ;
                this.loadMessage(); 
            });
            this.ls.save(this.location); 
        }else{
            alert("Invalid latitude and longitude"); 
        }
    }
    // Get Forecast information given entered address, if valid
    searchAddress(){
        this.fs.getGeocode(this.address)
        .subscribe(result => {
            if(result.results[0] !== undefined)
                this.search(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng); 
            else
                alert(`Could not find Address ${this.address} Please try again`);
         });
    }
    // Convert from unix time 
    dateFormat(unix:number){
        return new Date(unix * 1000); 
    }
    // Convert to unix time 
    unixFormat(date:string){
        if(date == null || date == undefined || !parseFloat(date))
            return null; 
        date = date.substring(0, date.indexOf('T'));
        return Math.round(new Date(date).getTime()/1000); 
    }
    // Show that new forecast has loaded
    loadMessage(){
        this.message = true; 
        setTimeout(() => {
            this.message = false;
        }, 5000);
    }
}