import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'


@Component({
    selector: 'weather',
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    template: require('./weather.html')
})
export class Weather {
    public data:any; 
    public days = [
        { title:"Monday",temp:25,info:"Going to be cold" },
        { title:"Tuesday",temp:35,info:"Going to be cold" },
        { title:"Wednesday",temp:45,info:"Going to be cold" },
        { title:"Thursday",temp:55,info:"Going to be cold" },
        { title:"Friday",temp:65,info:"Going to be cold" },
        { title:"Saturday",temp:75,info:"Going to be cold" },
        { title:"Sunday",temp:85,info:"Going to be cold" },
    ]; 
    
    constructor(public http:Http){
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                console.log("Postion: "+pos); 
            }); 
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
        let body = latitude +","+ longitude ;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers,           
            search: new URLSearchParams('location='+body)
        });
        this.http.post('/api/SampleData/CurrentForecasts', null, options)
        .map(response => response.json())
        .subscribe(
            data =>  this.Debug(data),
            err =>  console.log("Error: \n"+err),
            () => console.log('Get Complete')
        ); 
    }
}
