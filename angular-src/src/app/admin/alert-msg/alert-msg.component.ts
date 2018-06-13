import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent implements OnInit {

@ViewChild('f') registerForm: NgForm;
messages = {
  message: ''
};

  constructor(public adminService: AdminService) { }

  ngOnInit() {}

  addingMsg(form: NgForm) {
  	this.messages.message = this.registerForm.value.message;
    this.adminService.storeAlertMsg(this.messages).subscribe(data => {
      if(data.success) {
        this.adminService.showingMsg = true;
        this.adminService.getAlertMsg().subscribe(
          (data: any) => {
            this.adminService.msg = data.message;
            console.log(data)
          },
          (err) => console.log(err)
        );
      } else {
        console.log('fuck it..');
      }
    });
  }

  erasingMsg() {
  	this.adminService.showingMsg = false;
  }

}
