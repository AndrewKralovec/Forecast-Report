import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { Observable } from 'rxjs/Rx';

const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class LoginService {
    constructor(private router:Router, private http:Http){
    }
    // Remove user from storage
    logout():void {
        if(this.isLoggedIn){
            localStorage.removeItem("user");
            this.router.navigate(['/login']);
        }
    }
    // Add user to storage
    login(user):void {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/home']);      
    }
    register(firstName:string, lastName:string, userName:string, email:string, password:string, confirm:string):void {
        let body = { Email:email, Password:password, ConfirmPassword:confirm, UserName:userName, FirstName:firstName, LastName:lastName }; 
        console.log(body); 
        this.http.post('/api/Account/Register', body, {headers:headers})
        .map(response  => response.json())
        .subscribe(
             response => { 
                 console.log(response.message); 
                 this.login(response.user)
            }, 
            error => {
                 console.log("Error !!!:\n"+error); 
            }
        );
    }
    // Check if user is logged in
    isLoggedIn():boolean {
        if(localStorage.getItem("user") == null || localStorage.getItem("user") == undefined )
            return false;
        return true;  
    }
    // Find user in database, if exists, and log them in  
    find(email:any, password:any):void {
        let body = { Email:email, Password:password,RememberMe:false }; 
        console.log(body); 
        this.http.post('/api/Account/Login', body, {headers:headers})
        .map(response  => response.json())
        .subscribe(
             response => { 
                 console.log(response.message); 
                 this.login(response.user); 
            }, 
            error => {
                 console.log("Error !!!:\n"); 
                 this.userError(error); 
            }
        );
    }
    // Ger stored user
    getUser():any {
        if(this.isLoggedIn()){
            return JSON.parse(localStorage.getItem("user")); 
        }
    }
    // Alert user of error 
    userError(error){
        console.log(error); 
        alert("The user could not be found, please try again"); 
    }
}