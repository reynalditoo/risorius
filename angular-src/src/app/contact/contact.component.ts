import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

@ViewChild('question') question: ElementRef;
@ViewChild('joindre') joindre: ElementRef;
@ViewChild('tel') tel: ElementRef;
@ViewChild('msg') msg: ElementRef;
@ViewChild('form') form: ElementRef;
@ViewChild('last') last: ElementRef;
@ViewChild('isSent') isSent: ElementRef;
@ViewChild('isNotSent') isNotSent: ElementRef;
@ViewChild('f') signupForm: NgForm;

user = {
	name: '',
	email: '',
	message: ''
};

msgSent: boolean = false;
msgNotSent: boolean = false;

  constructor(elRef: ElementRef, 
              private contactService: ContactService, 
              private router: Router) { }

  ngOnInit() {
    this.question.nativeElement.style.display = 'inherit'; 
    setTimeout(() => {
      this.joindre.nativeElement.style.display = 'inherit';}, 
    2000);
    setTimeout(() => {
      this.tel.nativeElement.style.display = 'inherit';}, 
    4000);
    setTimeout(() => {
      this.msg.nativeElement.style.display = 'inherit';
      this.form.nativeElement.style.display = 'inherit';}, 
    6000);
    setTimeout(() => {
      this.last.nativeElement.style.display = 'inherit';}, 
    8000);
  }

  onSubmit() {
  	this.user.name = this.signupForm.value.name;
  	this.user.email = this.signupForm.value.email;
  	this.user.message = this.signupForm.value.message;
  	console.log(this.signupForm.value);
  	console.log(this.signupForm.valid);
    this.contactService.sendingForm(this.user).subscribe(data => {
    if (data.success) {// /routes/contact-form.js l.45 : res.json({success: true, msg: 'Your message : ' + mailOptions.html + 'was sent !'});
      console.log('L\'email a bien été envoyé !');
      this.msgSent = true;
      setTimeout(() => {
        this.isSent.nativeElement.style.display = 'none';},
      6000);
    } else {
      console.log('Something went wrong');
      this.msgNotSent = true;
      setTimeout(() => {
        this.isNotSent.nativeElement.style.display = 'none';},
      6000);
    }
  });
  }

}
