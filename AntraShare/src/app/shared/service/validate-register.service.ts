import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateRegisterService {

  constructor(private http: HttpClient) { }

  checkEmailValid(email: string) : Observable<boolean>{
    const url = ("localhost:4231/api/register/checkExistByEmail/" + email);
    return this.http.get<boolean>(url);
  }
}
