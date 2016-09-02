import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { LoginService } from '../../services/login-service';
import { History } from '../../models/history';


@Component({
    selector: 'search-history',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService],
    template: require('./history.html')
})
export class SearchHistory {
    searchs:Array<History> = new Array<History>(); 
    constructor(private ls:LoginService){
        ls.getHistory()
        .subscribe(result => {
            this.searchs = result ;
            console.log(this.searchs);
        }); 
    }
}
