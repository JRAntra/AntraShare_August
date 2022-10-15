import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService {

  private _url : string = "localhost:4231/api/register/checkExistByEmail/"

  constructor(private http : HttpClient) {}

  checkEmail(email : string) : Observable<boolean> {
    return this.http.get<boolean>(this._url + email);
  }
}
