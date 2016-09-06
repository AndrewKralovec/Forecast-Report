import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'home',
  providers: [LoginService], 
  template: require('./home.html')
})
export class Home {
    constructor(private router:Router, private ls: LoginService){
    }
    ngOnInit(){
        console.log(this.ls.isLoggedIn()); 
        if(!this.ls.isLoggedIn())
            this.router.navigate(['/login']);
    }
    logout(){
        this.ls.logout(); 
    }
}
