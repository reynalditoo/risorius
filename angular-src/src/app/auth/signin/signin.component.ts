import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  @ViewChild('loginFail') loginFailed: ElementRef;

  loginFailure: boolean;

  user = {
    username: '',
    password: ''
  }

  constructor( 
  private authService: AuthService,
  private router: Router
  ) { }

  ngOnInit() {
  }

    onLoginSubmit(form: NgForm) { // form prend la valeur de (f) du html, donc form et this.registerForm ont la même valeur
      
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;

      this.authService.loginUser(this.user).subscribe(data => {
      /*console.log(data.user.id);*/

      if(data.success) {
        if(data.user.id === '5a65daecc8384d00145d4c95') {
          this.authService.adminConnected = true;
          this.router.navigate(['/alert-msg']);
        }
        this.authService.storeUserData(data.token, data.user);
        this.loginFailure = false;
        /*this.router.navigate(['/accueil']);*/
      } else {
        this.loginFailure = true;
        setTimeout(() => {
          this.loginFailed.nativeElement.style.display = 'none';
        this.loginFailure = !this.loginFailure;},
        6000);
        this.router.navigate(['/authentification']);
      }
  })
  }

}