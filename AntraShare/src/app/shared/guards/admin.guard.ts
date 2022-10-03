import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ValidateDataService } from '../services/validate-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private checkUser: ValidateDataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    
      /*
      Can return boolean this way, however Observable<boolean> is different
      Use map to retain Observable
      this.checkUser.getUserProfile(route.paramMap.get('username')!).subscribe(
        res => (console.log(res))

      return this.checkUser.getUserProfile(route.paramMap.get('username')!).pipe(
      map(res => {
        return res.userRole === 'admin' ? true : false
      })
    )
      )
      */

     /*
     {
  "_id": {
    "$oid": "6205e49f223876263058315a"
  },
  "name": "CallbackCats",
  "userName": "CallbackCats",
  "userEmail": "group.callbackcats@gmail.com",
  "password": "$2a$10$d8QWXUh.xZKdluBDAriCpeW2VrXm1JCuJZqgdTkTm/l0aBwmFiz2q",
  "userRole": "admin",
  "age": 33,
  "gender": "Male",
  "phone": 1234567890,
  "__v": 0
}*/
    //Admin Username
    //localStorage.setItem('username', 'CallbackCats')

    //User Username
    localStorage.setItem('username','Honey')
    
    console.log(localStorage.getItem('username'))

    return this.checkUser.getUserProfile(localStorage.getItem('username')!).pipe(
      map(res => {
        return res.userRole === 'admin' ? true : false
      })
    )
    return true;
  }
  
}
