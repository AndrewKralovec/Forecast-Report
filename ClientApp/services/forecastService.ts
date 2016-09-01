import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'

@Injectable()
export class ForecastService {
    constructor(private http:Http){
        
    }
    getForcast(latitude:any, longitude:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers,           
            search: new URLSearchParams(`location=${latitude},${longitude}`)
        });
        return this.http.post('/api/SampleData/CurrentForecasts', null, options) 
                   .map(response  => response.json());
    }
    getForecastDate(latitude:any, longitude:any, time:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers,           
            search: new URLSearchParams(`location=${latitude},${longitude},${time}`)
        });
        return this.http.post('/api/SampleData/CurrentForecasts', null, options) 
                   .map(response  => response.json());
    }
 
}