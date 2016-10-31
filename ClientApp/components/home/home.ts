import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HistoryService } from '../../services/history.service';



@Component({
  selector: 'home',
  providers: [LoginService, HistoryService],
  template: require('./home.html'),
  styleUrls:['./styles/home.css']
})
export class Home implements OnInit {
    constructor(private ls:LoginService,private hs:HistoryService, private router:Router){
    }
    ngOnInit() { 
        console.log(this.ls.isLoggedIn()); 
        if(!this.ls.isLoggedIn()){
            this.router.navigate(['/login']); 
        }
    }
    test(){
        console.log("Test");
        this.hs.save({
            latitude:41.8093699,
            longitude:-89.8093699
        }); 
    }
}
