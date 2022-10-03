import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/shared/models/LoginModel';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  letlogin(loginModel: LoginModel)  {

    return this.http.post('http://localhost:4231/api/login/',loginModel)
    
  } 
  
}

