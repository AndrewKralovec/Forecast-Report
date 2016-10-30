import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { LoginService } from '../../services/login.service';
// import {FormGroup, FormControl, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
    selector: 'register',
    directives: [FORM_DIRECTIVES],
    providers: [LoginService],
    template: require('./register.html'),
    styleUrls:['./styles/register.css']
})
export class Register {
    constructor(private ls:LoginService){
    }
    // Register user
    register(firstName:string, lastName:string, userName:string, email:string, password:string, confirm:string){
        this.ls.register(firstName, lastName, userName, email, password, confirm); 
    }
}
