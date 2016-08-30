// LimitTo pipe takes one arg and limits the string to that length. If no arg, then defaults to length of 10 
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'LimitTo'
})
export class LimitTo {
  transform(value: string, limit: number) : string {
    limit = limit != null ? limit : 10;
    let ending:string = '...';
    return value.length > limit ? value.substring(0, limit) + ending : value;
  }
}