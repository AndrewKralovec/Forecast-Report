import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'nav-menu',
  template: require('./nav-menu.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class NavMenu {
}
