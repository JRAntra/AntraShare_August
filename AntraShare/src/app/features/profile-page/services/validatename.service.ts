import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatenameService {

  constructor(private http: HttpClient) {}
  
  validateName(name: string): Observable<boolean>{
    return this.http.get<boolean>("http://localhost:4231/api/register/checkExistByUsername/" + name)
    // return this.http.get<any>("localhost:4231/api/news")
  }
}
