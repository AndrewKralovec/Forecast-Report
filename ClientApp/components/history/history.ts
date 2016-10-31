import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { ForecastService } from '../../services/forecast.service';
import { HistoryService } from '../../services/history.service';
import { History } from '../../models/history';

@Component({
    selector: 'search-history',
    directives: [FORM_DIRECTIVES],
    providers: [HistoryService, ForecastService],
    template: require('./history.html'),
    styleUrls:['./styles/history.css']
})
export class SearchHistory {
    searchs:Array<History> = new Array<History>();
    // Load last 100 searches from server 
    constructor(private hs:HistoryService,private fs:ForecastService){
        hs.getHistory()
        .subscribe(result => {
            console.log(result); 
            this.searchs = result ;
            this.searchs.forEach(s => {
                this.fs.getGeocode(s.input).subscribe(response =>{
                    s.address = response.results[0].formatted_address; 
                });
            }); 
        }); 
    }
}

