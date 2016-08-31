import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WeatherChart } from './weather-chart';

@Component({
    selector: 'weather-chart',
    directives: [WeatherChart],
    template: require('./chart.html')
})
export class Chart {
    
}
