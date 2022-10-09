import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidateDataService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:4231/api"

  //localhost:4231/api/register/checkExistByUsername/:username
  checkUserName(username: string): Observable<boolean> {
    const checkUsernameUrl = "register/checkExistByUsername"
    const apiUrl = `${this.baseUrl}/${checkUsernameUrl}/${username}`
    // console.log(apiUrl)
    // console.log(this.httpClient.get<boolean>(apiUrl))
    return this.httpClient.get<boolean>(apiUrl)
  }

  //localhost:4231/api/register/checkExistByEmail/:userEmail
  checkEmail(email: string): Observable<boolean> {
    const checkEmailUrl = `register/checkExistByEmail`
    const apiUrl = `${this.baseUrl}/${checkEmailUrl}/${email}`
    // console.log(apiUrl)
    return this.httpClient.get<boolean>(apiUrl)
  }

  getUserProfile(username: string): Observable<User> {

    const getUserUrl = `users/getProfile`
    const apiUrl = `${this.baseUrl}/${getUserUrl}/${username}`
    return this.httpClient.get<User>(apiUrl)
  }
}
