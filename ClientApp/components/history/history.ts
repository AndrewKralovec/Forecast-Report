import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { LoginService } from '../../services/login-service';
import { User } from '../../models/user';


@Component({
    selector: 'search-history',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService],
    template: require('./history.html')
})
export class SearchHistory {
    constructor(private ls:LoginService){
        
    }
}
