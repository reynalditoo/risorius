import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  adminConnected: boolean = false;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
      .map(res => res.json()); // 'user' to send user's data to the backend
  }

  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
      .map(res => res.json()); // 'user' to send user's data to the backend
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken); // sending the token with the headers in the request/endpoint
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
      .map(res => res.json()); // no more 'user' parameter coz not sending user's data to the backend
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() { // récupère le token dans localstorage
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
