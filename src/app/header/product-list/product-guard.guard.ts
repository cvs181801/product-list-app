import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const Index = Number(route.paramMap.get('Index'));
      if(isNaN(Index) || Index < 1) {
        alert('Invalid Product ID entered; please try again')
        this.router.navigate(['/products'])
        return false;
      }
    return true;
  }
  
}
