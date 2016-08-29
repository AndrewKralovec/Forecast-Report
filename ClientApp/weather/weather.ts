import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http,Jsonp } from '@angular/http'

@Component({
    selector: 'weather',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    template: require('./weather.html')
})
export class Weather {
    public days = [
        { title:"Monday",temp:25,info:"Going to be cold" },
        { title:"Tuesday",temp:35,info:"Going to be cold" },
        { title:"Wednesday",temp:45,info:"Going to be cold" },
        { title:"Thursday",temp:55,info:"Going to be cold" },
        { title:"Friday",temp:65,info:"Going to be cold" },
        { title:"Saturday",temp:75,info:"Going to be cold" },
        { title:"Sunday",temp:85,info:"Going to be cold" },
    ]; 
    constructor(public http:Http, public jsonp:Jsonp){
        
    }
    search(latitude: any, longitude: any){
        console.log(latitude); 
        console.log(longitude);
        let body = 'https://api.forecast.io/forecast/6032920e453a7d19ea39cf5f0c03c120/'+latitude+','+longitude ; 
        console.log(body); 
        this.jsonp.get(body)
        .map(response => response.json())
        .subscribe(
                data =>  console.log("Data: "+data),
                err =>  console.log("Error: "+err),
                () => console.log('Get Complete')
        );
    }
}
