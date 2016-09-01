import * as ng from '@angular/core';

import { LoginService, User } from '../../services/login-service';


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
