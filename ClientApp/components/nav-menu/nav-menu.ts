import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'nav-menu',
  providers: [LoginService],
  template: require('./nav-menu.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class NavMenu {
    constructor(private ls: LoginService){
    }
    logout(){
        this.ls.logout(); 
    }
}
