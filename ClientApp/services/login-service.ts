import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'

import { User } from '../models/user';

let users:User[] = [
    { id:1, email:'test@yahoo.com', password:'123' }, 
    { id:2, email:'root@test.com', password:'linux' }
];
 
@Injectable()
export class LoginService {
    constructor(private router:Router, private http:Http){
        
    }
    logout() {
        localStorage.removeItem("user");
        this.router.navigate(['Login']);
    }
    login(user){
        let authenticatedUser:User = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password){
            console.log(JSON.stringify(authenticatedUser));
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this.router.navigate(['/home']);      
            return true;
        }
        return false;
    }
    checkCredentials(){
        if (localStorage.getItem("user") === null){
            this.router.navigate(['/login']);
        }
    } 
    find(un:any, pwd:any){
        var headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Test History"); 
        this.http.post('/api/User/searchHistory', { email:un, password:pwd },{headers:headers})
        .map(response  => response.json())
        .subscribe(
            data => console.log(data), 
            error => console.log(error),
            () => console.log("Complete")
        );
    }
}