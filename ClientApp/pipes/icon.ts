// Icon pipe returns weather icon image location given the icon value passed in 
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Icon'
})
export class Icon {
    transform(value: string) : any {
        let src:string; 
        switch (value) {
            case "clear-day":
                src = "sun.gif";
                break;
            case "clear-night":
                src = "night.gif";
                break;
            case "rain":
                src = "rain.gif";
                break;
            case "wind":
                src = "wind.gif";
                break;
            case "snow":
                src =  "snow.gif";
                break;
            case "partly-cloudy-day":
                src =  "cloudy-day.gif";
                break;
            case "partly-cloudy-night":
                src =  "cloudy-day.gif";
                break;
            default: 
                src = "cloud.gif";
                break;
        }
        return `http://localhost:5000/images/${src}`; 
    }
}