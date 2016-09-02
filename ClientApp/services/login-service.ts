import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'

import { User } from '../models/user';

let users:User[] = [
    { email:'test@yahoo.com', password:'123' }, 
    { email:'root@test.com', password:'linux' }
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
        var creds = { email:un, password:pwd }; 
        console.log(creds); 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/User/find', creds,{headers:headers})
        .map(response  => response.json())
        .subscribe(
            data => console.log(data), 
            err => console.log(err),
            () => console.log("")
        );
    }
}