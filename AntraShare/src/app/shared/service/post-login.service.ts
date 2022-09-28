import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(private http: HttpClient) { }


  postLogin(loginBody: Login)  {
    return this.http.post('http://localhost:4231/api/login/', loginBody)
  }
}
