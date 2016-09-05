import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { ForecastService } from '../../services/forecast.service';
import { History } from '../../models/history';

@Component({
    selector: 'search-history',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService, ForecastService],
    template: require('./history.html')
})
export class SearchHistory {
    searchs:Array<History> = new Array<History>(); 
    constructor(private ls:LoginService,private fs:ForecastService){
        ls.getHistory()
        .subscribe(result => {
            this.searchs = result ;
            console.log(this.searchs);
        }); 
    }
    formatAdress(address:string){
        this.fs.getAddress(address)
        .subscribe(result => {
            console.log(address);
            return result.results[0].formatted_address; 
        });
    }
}
