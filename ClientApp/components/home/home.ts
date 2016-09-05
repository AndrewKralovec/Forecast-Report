import * as ng from '@angular/core';
import { LoginService } from '../../services/login-service';
import { ForecastService } from '../../services/forecastService';


@ng.Component({
  selector: 'home',
  providers: [LoginService, ForecastService],
  template: require('./home.html')
})
export class Home {
    constructor(private ls:LoginService, private fs:ForecastService){
    }
    test(){
        this.fs.getAddress("41.8093699,-87.8729122	")
        .subscribe(result => {
            console.log(result.results[0].formatted_address); 
        });
    }
    ngOnInit(){
        this.ls.checkCredentials();
    }
    logout() {
        this.ls.logout();
    }
}
