import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http' 
import { Observable } from 'rxjs/Rx';

const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class HistoryService {
    constructor(private router:Router, private http:Http){
    }
    // Get user search history from server
    getHistory():Observable<any> {
        return this.http.get('/api/History/getHistory')
        .map(response  => response.json()); 
    }
    // Save searchs to the server
    save(input:any):void {
        console.log(input)
        this.http.post('/api/History/saveHistory', input, {headers:headers})
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
}