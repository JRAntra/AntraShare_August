import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _url : string= 'http://localhost:4231/api/register/createNewAccount';

  constructor(private http : HttpClient) { }

  register(register : any) {
    let body = {
      userName: register.username,
      userEmail: register.email,
      password: register.password
    }
    console.log(body.userEmail);

    return this.http.post(this._url, body);
  }
}
