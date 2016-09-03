import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { History } from '../models/history';

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
        console.log("Test History"); 
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/User/getHistory', JSON.parse(localStorage.getItem("user")),{headers:headers})
        .map(response  => response.json()); 
    }
    save(input:any) {
        console.log("Test Save"); 
        let body = {
            id:JSON.parse(localStorage.getItem("user")).id, 
            input:`${input.latitude},${input.longitude}`, 
            date: Date.now()
        }; 
        var headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('/api/User/saveHistory', body, {headers:headers})
        .map(response  => response.json())
        .subscribe(result => {
            console.log(result);
        }); 

    }
}