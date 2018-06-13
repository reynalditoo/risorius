import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../admin/admin.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isCollapsed;
  
  constructor(public authService: AuthService, 
              public adminService: AdminService,
              private router: Router) { }

    signingOut() {
    	this.authService.logout();
      this.authService.adminConnected = false;
      console.log('You are now logged out');
      this.router.navigate(['/authentification']);
    }

}