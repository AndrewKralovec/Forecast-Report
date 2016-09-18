import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Location } from '../models/location';

@Injectable()
export class ForecastService {
    public weekday:string[] = [
        "Sunday", "Monday", "Tuesday","Wednesday",
        "Thursday", "Friday","Saturday"
    ]; 
    constructor(private http:Http){
    }
    // Get the forecast from the server API
    getForcast(location:Location){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/Forecast/CurrentForecasts', location, {headers:headers}) 
        .map(response  => response.json());
    }
    // Get geolocation information from the google maps API
    getGeocode(address:string){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address)
        .map(response  => response.json());
    }
}