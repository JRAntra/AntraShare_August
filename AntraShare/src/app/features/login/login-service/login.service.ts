import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  letlogin(user: User): Observable<User> {

    return this.http.post<User>('http://localhost:4231/api/login/',user)
    
  } 
  
}

