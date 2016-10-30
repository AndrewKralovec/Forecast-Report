import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { Observable } from 'rxjs/Rx';

const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class UserService {
    constructor(private router:Router, private http:Http){
    }
    // Get user search history from server
    getHistory():Observable<any> {
        return this.http.post('/api/User/getHistory', JSON.parse(localStorage.getItem("user")),{headers:headers})
        .map(response  => response.json()); 
    }
    // Save searchs to the server
    save(input:any):void {
        let body = {
            id:JSON.parse(localStorage.getItem("user")).id, 
            input:`${input.latitude},${input.longitude}`, 
            date: Date.now()
        }; 
        this.http.post('/api/User/saveHistory', body, {headers:headers})
        .map(response  => response.json())
        .subscribe(
             response => { 
                 console.log(response.message); 
            }, 
            error => {
                 console.log("Error !!!:\n"); 
            }
        ); 
    }
    // Alert user of error 
    userError(error){
        console.log(error); 
        alert("The user could not be found, please try again"); 
    }
}