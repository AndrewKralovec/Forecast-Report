import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

let users:User[] = [
    { email:'test@yahoo.com', password:'123' }, 
    { email:'root@test.com', password:'linux' }
];
 
@Injectable()
export class LoginService {
    constructor(private router:Router){
        
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
}