import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  letlogin(loginBody: Login)  {
    return this.http.post('http://localhost:4231/api/login/',loginBody)
    // console.log(this.http.post('http://localhost:4231/api/login/',loginBody))
  }
  
}
