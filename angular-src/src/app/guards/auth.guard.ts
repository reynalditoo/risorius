// PROTECTION DES ROUTES => pour que n'importe qui ne puisse pas aller sur '/profile' s'il n'est pas connecté

import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}

  canActivate(){
    if(this.authService.adminConnected) {
      return true;
    } else {
      this.router.navigate(['/authentification']);
      return false;
    }
  }
}