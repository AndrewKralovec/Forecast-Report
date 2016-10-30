import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'home',
  providers: [LoginService],
  template: require('./home.html'),
  styleUrls:['./styles/home.css']
})
export class Home implements OnInit {
    constructor(private ls:LoginService, private router:Router){
    }
    ngOnInit() { 
        console.log(this.ls.isLoggedIn()); 
        if(!this.ls.isLoggedIn()){
            this.router.navigate(['/login']); 
        }
    }
}
