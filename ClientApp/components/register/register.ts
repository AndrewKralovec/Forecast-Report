import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { LoginService } from '../../services/login.service';
// import {FormGroup, FormControl, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
    selector: 'login',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService],
    template: require('./register.html'),
    styleUrls:['./styles/register.css']
})
export class Register {
    constructor(private ls:LoginService){
    }
    // Register user
    register(email: any, password: any, confirm: any){
        this.ls.register(email, password, confirm); 
    }
}
