import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostLoginService } from '../service/post-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuardGuard implements CanActivate {
  // public role = 'admin';

  constructor(private postService: PostLoginService,){
    
  }

  // updateRoles(update: string){
  //   this.role = update;
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const role = this.postService.getRole();
    console.log("the role in guard is: "+ role)
    return (role === 'admin')? true: false;
  }
  
}
