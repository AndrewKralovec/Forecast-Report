import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'home',
  providers: [LoginService, ForecastService],
  template: require('./home.html')
})
export class Home {
    constructor(private ls:LoginService){
    }
    ngOnInit(){
        this.ls.checkCredentials();
    }
    logout() {
        this.ls.logout();
    }
}
