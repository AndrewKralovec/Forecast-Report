import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http,Jsonp } from '@angular/http'

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
    constructor(public http:Http, public jsonp:Jsonp){
        
    }
    Debug(data:any){
        console.log("Data"); 
        this.data = data; 
        console.log(this.data); 
    }
    Error(error:any){
        console.log("Error"); 
        console.log(error); 
    }
    search(latitude: any, longitude: any){
        console.log("Test"); 
        this.http.get('/api/SampleData/SendRequest')
        .map(response => response.json())
        .subscribe(
            data =>  this.Debug(data),
            err =>  this.Error(err),
            () => console.log('Get Complete')
        ); 
    }
}
