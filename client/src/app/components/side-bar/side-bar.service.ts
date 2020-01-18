import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {

  constructor(private http: HttpService, private router: Router) {
  }
  search(query, usedfor) {
    return this.http.getRequest(`/search?keyword=${query}&usedfor=${usedfor}`)
  }
  logOut(): void {
    localStorage.removeItem("token")
    // this.logged = false;
    this.router.navigate(['/home'])
  }
}
