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
    register(email:any, password:any, confirm:any){
        //let body:User = {email:email, password:password}; 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = {Email:email, Password:password,ConfirmPassword:confirm }; 
        console.log(body); 
        this.http.post('/api/Account/Register', body ,{headers:headers})
        .map(response  => response.json())
        .subscribe(
             response => { 
                 console.log("Success !!!:\n"+response); 
                 this.router.navigate(['/home']);
            }, 
            error => {
                 console.log("Error !!!:\n"+error); 
            }
        );
    }
    // Check if user is logged in
    isLoggedIn(){
        if(localStorage.getItem("user") == null || localStorage.getItem("user") == undefined )
            return false;
        return true;  
    }
    // Find user in database, if exists, and log them in  
    find(email:any, password:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = { Email:email, Password:password,RememberMe:false }; 
        console.log(body); 
        this.http.post('/api/Account/Login', body ,{headers:headers})
        .map(response  => response.json())
        .subscribe(
             response => { 
                 console.log("Response !!!:\n"); 
                 this.login(response); 
            }, 
            error => {
                 console.log("Error !!!:\n"); 
                 this.userError(error); 
            }
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