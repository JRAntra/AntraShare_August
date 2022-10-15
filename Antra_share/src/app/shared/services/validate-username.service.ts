import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // imported after HttpClientModule is placed into app.module

@Injectable({
  providedIn: 'root'
})
export class ValidateUsernameService {

  private _url : string = "http://localhost:4231/api/register/checkExistByUsername/"
  
  constructor(private http: HttpClient) {
    
  }

  checkUsername(username : string) : Observable<boolean> {
    return this.http.get<boolean>(this._url + username);
  }
}
