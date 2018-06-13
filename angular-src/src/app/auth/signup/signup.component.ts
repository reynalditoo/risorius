import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
/*import { FlashMessagesService } from 'angular2-flash-messages';*/
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('regSuccess') regSucceed: ElementRef;
  @ViewChild('regFail') regFailed: ElementRef;
  @ViewChild('f') registerForm: NgForm;

  registrationSuccessful: boolean;
  registrationFailure: boolean;

  user = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    /*private flashMessageService: FlashMessagesService*/
    ) { }

  ngOnInit() {

  }

  onRegisterSubmit(form: NgForm) { // form prend la valeur de (f) du html, donc form et this.registerForm ont la même valeur
    this.user.name = this.registerForm.value.name;
    this.user.username = this.registerForm.value.username;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    console.log(this.user.name);   

    this.authService.registerUser(this.user).subscribe(data => {
    if (data.success) {
      console.log('Registration successful !');
      this.router.navigate(['/authentification']);
      this.registrationSuccessful = true;
      this.registrationFailure = false;
      setTimeout(() => {
        this.regSucceed.nativeElement.style.display = 'none';},
      6000);
    } else {
      console.log('Something went wrong');
      this.router.navigate(['/register']);
      this.registrationSuccessful = false;
      this.registrationFailure = true;
      setTimeout(() => {
        this.regFailed.nativeElement.style.display = 'none';},
      6000);
    }
  })
  }

  // this.flashMessage.show('Please use a valid email')
}
