import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {
  constructor(private local : LocalService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.local.tempAdmin;
  }
}
