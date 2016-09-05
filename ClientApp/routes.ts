import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Weather } from './components/weather/weather';
import { Chart } from './components/chart/chart';
import { SearchHistory } from './components/history/history';
import { LoggedInGuard } from './models/logged-in.guard.ts'; 

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, canActivate: [LoggedInGuard] },
    { path: 'login', component: Login },
    { path: 'weather', component: Weather },
    { path: 'chart', component: Chart },
    { path: 'history', component: SearchHistory },
    { path: '**', redirectTo: 'home' }
];
