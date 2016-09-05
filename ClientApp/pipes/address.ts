// LimitTo pipe takes one arg and limits the string to that length. If no arg, then defaults to length of 10 
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Address'
})
export class Address {

    transform(value: string) : any {
        return ""; 
    }
}