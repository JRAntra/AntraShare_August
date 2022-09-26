import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:4231/api";

  checkUserNameValid(userName: string): Observable<boolean> {
    const registerUrl = "/register/checkExistByUsername";
    const url = this.baseUrl + registerUrl + "/" + userName;
    console.log(url)
    // http://localhost:4231/api/register/checkExistByUsername/:username
    return this.httpClient.get<boolean>(url);
  }
}
