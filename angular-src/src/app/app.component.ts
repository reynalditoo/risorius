import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
constructor(private router: Router) { }

    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDIE1jMiwIl7HkrvsSDUnLGvlB8IH2ez7E',
        authDomain: 'risorius-72074.firebaseapp.com'
      });
    	// scrolltop automatique sur une nouvelle page
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            };
            window.scrollTo(0, 0);
        });
    }
    
}
