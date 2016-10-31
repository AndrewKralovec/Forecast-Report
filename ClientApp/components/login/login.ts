import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES,  } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
// import {FormGroup, FormControl, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
    selector: 'login',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [LoginService],
    template: require('./login.html'),
    styleUrls:['./styles/login.css']
})
export class Login {
    constructor(private ls:LoginService){
    }
    // Login in user
    login(email: any, password: any){
        this.ls.find(email, password); 
    }
}
