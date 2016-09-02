import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
@Injectable()
export class LoginService {
    constructor(private router:Router, private http:Http){
        
    }
    logout() {
        console.log("Log out"); 
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
    login(user){
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/home']);      
    }
    checkCredentials(){
        if (localStorage.getItem("user") === null){
            this.router.navigate(['/login']);
        }
    } 
    find(un:any, pwd:any){
        var headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Test Login"); 
        this.http.post('/api/User/find', { email:un, password:pwd },{headers:headers})
        .map(response  => response.json())
        .subscribe(
            data => this.login(data), 
            error => console.log(error),
            () => console.log("Complete")
        );
    }
    getHistory(){
        var headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Test History"); 
        console.log(JSON.parse(localStorage.getItem("user"))); 
        return this.http.post('/api/User/getHistory', JSON.parse(localStorage.getItem("user")),{headers:headers})
        .map(response  => response.json()); 
    }
}