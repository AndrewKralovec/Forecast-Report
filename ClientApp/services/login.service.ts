import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { History } from '../models/history';
import { User } from '../models/user';


@Injectable()
export class LoginService {
    constructor(private router:Router, private http:Http){
    }
    // Remove user from storage
    logout() {
        if(this.isLoggedIn){
            localStorage.removeItem("user");
            this.router.navigate(['/login']);
        }
    }
    // Add user to storage
    login(user){
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/home']);      
    }
    // Check if user is logged in
    isLoggedIn(){
        if(localStorage.getItem("user") == null || localStorage.getItem("user") == undefined )
            return false;
        return true;  
    }
    // Find user in database, if exists, and log them in  
    find(email:any, password:any){
        //let body:User = {email:email, password:password}; 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('/api/User/find', {email:email, password:password} ,{headers:headers})
        .map(response  => response.json())
        .subscribe(
            data => this.login(data), 
            error => this.userError(error)
        );
    }
    // Get user search history from server
    getHistory(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/User/getHistory', JSON.parse(localStorage.getItem("user")),{headers:headers})
        .map(response  => response.json()); 
    }
    // save searchs to the server
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
            if(!result){
                console.log(result); 
            }
        }); 
    }
    // Alert user of error 
    userError(error){
        console.log(error); 
        alert("The user could not be found, please try again"); 
    }
}