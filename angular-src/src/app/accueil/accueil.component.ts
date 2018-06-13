import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

bio: boolean = false;
motto: boolean = false;

  constructor() { }

  ngOnInit() {}

  bioON() {
  	if(!this.motto) {
  		this.bio = true;
  	}
  }
  bioOFF() {
    this.bio = false;
  }

  mottoON() {
  	if (!this.bio) {
  		this.motto = true;
  	}
  }
  mottoOFF() {
    this.motto = false;
  }

 

}