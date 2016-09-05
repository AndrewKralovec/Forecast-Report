import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private ls: LoginService) {}

  canActivate() {
    return this.ls.isLoggedIn();
  }
}