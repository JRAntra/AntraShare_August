import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse, user: User) {
    //client-side or network error
    if (error.status === 0) console.error(`An Error Occurred: `, error.error)
    //backend returned unsuccessful
    //error status may be helpful
    else console.error(`Backend returned code ${error.status}, body was `, error.error)

    return throwError( () => new Error(`Something bad happened! Please try again later.`))
  }

  /*
  {
    "userName": "Eric",
    "userEmail": "eric@gmail.com",
    "password": "password"
  }
  */
  addUser(user: User):Observable<User> {
    const registerUrl = "http://localhost:4231/api/register/createNewAccount"

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)

    return this.http.post<User>(registerUrl, user, {"headers": headers})
    //.pipe(catchError(this.handleError('addUser', user)))
  }
}
