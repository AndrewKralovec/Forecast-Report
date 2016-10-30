import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Weather } from './components/weather/weather';
import { Chart } from './components/chart/chart';
import { SearchHistory } from './components/history/history';
import { LoggedInGuard } from './models/logged-in.guard.ts'; 

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home },
    { path: 'weather', component: Weather, canActivate: [LoggedInGuard] },
    { path: 'chart', component: Chart, canActivate: [LoggedInGuard] },
    { path: 'history', component: SearchHistory, canActivate: [LoggedInGuard] },
    { path: '**', redirectTo: 'home' }
];
