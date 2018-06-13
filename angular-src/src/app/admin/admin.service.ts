import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  msg: string;
  showingMsg: boolean;

  storeAlertMsg(messages: object) {
  	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('admin/put-alert-msg', messages, {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
      .map(res => res.json()); // 'messages' to send the message to the backend
  }

  getAlertMsg() {
    /*let headers = new Headers();
    headers.append('Content-Type', 'application/json');*/
  	return this.http.get('admin/get-alert-msg')
    .map(
      (response: Response) => {
        const data = response.json(); // convertit l'objet en du json utilisable
        return data;
      },
      (err) => console.log(err)
    );
  }

}
