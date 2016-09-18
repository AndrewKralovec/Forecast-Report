import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';

@Component({
    selector: 'login',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService],
    template: require('./login.html')
})
export class Login {
    constructor(private ls:LoginService){
    }
    // Login in user
    login(email: any, password: any){
        this.ls.find(email,password); 
    }
}
