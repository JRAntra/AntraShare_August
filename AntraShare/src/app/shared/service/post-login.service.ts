import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { UserProfile } from '../models/userprofile';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(private http: HttpClient) { }


  postLogin(loginBody: Login) : Observable<UserProfile>  {
    // return this.http.post<UserProfile>('http://localhost:4231/api/login/', loginBody)
    return this.http.post<UserProfile>('http://localhost:3000/login/', loginBody)
  }

  updateRole(update: string) {
    localStorage.setItem('role', update)
  }

  getRole() {
    var value = localStorage.getItem('role')
    return (value)
  }

  findEmail(username: string) : Observable<boolean> {
    // const url = ('http://localhost:4231/api/users/getProfile/'+ username)
    const url = ('http://localhost:3000/users/getProfile/'+ username)
    return this.http.get<boolean>(url)
  }
}
