import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { ForecastService } from '../../services/forecast.service';
import { History } from '../../models/history';

@Component({
    selector: 'search-history',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService, ForecastService],
    template: require('./history.html'),
    styleUrls:['./css/history.css']
})
export class SearchHistory {
    searchs:Array<History> = new Array<History>();
    // Load last 100 searches from server 
    constructor(private ls:LoginService,private fs:ForecastService){
        ls.getHistory()
        .subscribe(result => {
            this.searchs = result ;
            this.searchs.forEach(s =>{
                this.fs.getGeocode(s.input).subscribe(response =>{
                    s.address = response.results[0].formatted_address; 
                });
            }); 
        }); 
    }
}

