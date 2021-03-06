import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService, 
        private _router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if (this._authService.isLoggedIn)
        return true;
     
        // this._router.navigate(['login',]);
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        return false;
    }
}