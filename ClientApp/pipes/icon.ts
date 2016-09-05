// LimitTo pipe takes one arg and limits the string to that length. If no arg, then defaults to length of 10 
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Icon'
})
export class Icon {
    transform(value: string) : any {
        switch (value) {
            case "clear-day":
                return "sun.gif";
            case "clear-night":
                return  "night.gif";
            case "rain":
                return "rain.gif";
            case "wind":
                return "wind.gif";
            case "snow":
                return  "snow.gif";
            case "partly-cloudy-day":
                return  "cloudy-day.gif";
            case "partly-cloudy-night":
                return  "cloudy-day.gif";
            default: 
                return "cloud.gif";
        }
    }
}