import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SafeguardGuard implements CanActivate {
  role: string | null | undefined;
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot) {
      this.role=localStorage.getItem('role');
      if(this.role=='admin')
      return true;
      else{
        alert("You are not authorized to visit page");
        return false;
      }
    }

}
