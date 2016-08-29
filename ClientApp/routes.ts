import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { FetchData } from './components/fetch-data/fetch-data';
import { Counter } from './components/counter/counter';
import { Weather } from './components/weather/weather';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'counter', component: Counter },
    { path: 'fetch-data', component: FetchData },
    { path: 'weather', component: Weather },
    { path: '**', redirectTo: 'home' }
];
