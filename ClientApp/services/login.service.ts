import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { History } from '../models/history';

@Injectable()
export class LoginService {
    private loggedIn:boolean = false; 
    constructor(private router:Router, private http:Http){
        
    }
    logout() {
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
    login(user){
        localStorage.setItem("user", JSON.stringify(user));
        this.loggedIn = true; 
        this.router.navigate(['/home']);      
    }
    isLoggedIn(){
        if(localStorage.getItem("user") === null)
            return false;
        return true;  
    }
    checkCredentials(){
        if (localStorage.getItem("user") === null)
            this.router.navigate(['/login']);
    } 
    find(email:any, password:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('/api/User/find', { email:email, password:password },{headers:headers})
        .map(response  => response.json())
        .subscribe(
            data => this.login(data), 
            error => this.error(error),
            () => console.log("Complete")
        );
    }
    getHistory(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/User/getHistory', JSON.parse(localStorage.getItem("user")),{headers:headers})
        .map(response  => response.json()); 
    }
    save(input:any) {
        let body = {
            id:JSON.parse(localStorage.getItem("user")).id, 
            input:`${input.latitude},${input.longitude}`, 
            date: Date.now()
        }; 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('/api/User/saveHistory', body, {headers:headers})
        .map(response  => response.json())
        .subscribe(result => {
            console.log(result);
        }); 
    }
    error(error){
        console.log(error); 
        alert("The user could not be found, please try again"); 
    }
}