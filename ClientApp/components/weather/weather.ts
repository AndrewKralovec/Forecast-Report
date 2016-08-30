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
    private location:Location = {
        latitude:41.8093699,
        longitude:-89.8093699
    }; 
    private days = [
        { title:"Monday",temp:25,info:"Going to be cold" },
        { title:"Tuesday",temp:35,info:"Going to be cold" },
        { title:"Wednesday",temp:45,info:"Going to be cold" },
        { title:"Thursday",temp:55,info:"Going to be cold" },
        { title:"Friday",temp:65,info:"Going to be cold" },
        { title:"Saturday",temp:75,info:"Going to be cold" },
        { title:"Sunday",temp:85,info:"Going to be cold" },
    ]; 
    
    constructor(public fs:ForcastService){
        // Geolocation.
        // this.refresh(); 
        fs.getForcast(this.location.latitude,this.location.longitude).subscribe(result => {
            this.forecast = result ;
            console.log(this.forecast);
        }); 
    }
    refresh(){
        console.log("Refresh");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError); 
        } else {
          console.log("Browser doesn't support Geolocation"); 
        }
    }
    Debug(data:any){
        console.log("Data"); 
        this.data = data; 
        console.log(this.data); 
    }
    search(latitude: any, longitude: any){
        this.fs.getForcast(latitude,longitude)
            .subscribe(
                data =>  this.Debug(data),
                err =>  console.log("Error: \n"+err),
                () => console.log('Get Complete')
            ); 
    }
    showPosition(position) {
        var pos = {
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        };
        console.log("Postion: "+pos.latitude+" "+pos.longitude); 
    }

    showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation."); 
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }
    
}
