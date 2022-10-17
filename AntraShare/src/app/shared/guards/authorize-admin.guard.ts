import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostLoginService } from '../service/post-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeAdminGuard implements CanActivate {


  constructor(private postService: PostLoginService){

  }

  private isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const userToken = this.postService.getToken()
    const role = userToken?.userRole
    // const role = this.postService.getRole()
    console.log("the role in guard is: "+ role)
    return (role === 'admin')? true: false
  }




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }
  
}
