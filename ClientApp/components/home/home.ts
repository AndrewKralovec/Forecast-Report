import * as ng from '@angular/core';
import { LoginService } from '../../services/login-service';
import { User } from '../../models/user';


@ng.Component({
  selector: 'home',
  providers: [LoginService],
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
