import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

import { LoginService } from '../../services/login-service';
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
    test(email: any, password: any){
        console.log("Test"); 
        let user:User = {
            email:email,password:password
        }; 
        console.log(user); 
        if(!this.ls.login(user)){
            alert("Failed to login");
        }
    }
    login(email: any, password: any){
        console.log("Test Login"); 
        this.ls.find(email,password); 
    }
}
