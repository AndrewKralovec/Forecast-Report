import 'es6-shim';
require('zone.js');
import 'bootstrap';
import 'reflect-metadata';
import './styles/site.css';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormBuilder } from '@angular/common';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { App } from './components/app/app';
import { routes } from './routes';

bootstrap(App, [
    HTTP_PROVIDERS,
    FormBuilder,
    provideRouter(routes)
]);

declare var module: any;
if (module.hot) {
    module.hot.accept();
}
