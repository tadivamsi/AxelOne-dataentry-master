import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  key: string | null | undefined;
  rtr: any;
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot){
      this.key=localStorage.getItem('key');
      if(this.key===''){
        alert("can't access this page");
        this.rtr.navigate(['login']);
        return false;
      }
      else {
        return true;
      }
  
    }
  }
