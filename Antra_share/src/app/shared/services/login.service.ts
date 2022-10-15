import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private __url : string = 'http://localhost:4231/api/login';

  constructor(private http : HttpClient) { }

  // use object instead
  login(user : any) {
    // the control is properly passed
    let body = {
      userEmail: user.username,
      password: user.password,
    }
    return this.http.post(this.__url, body);
  }
}
