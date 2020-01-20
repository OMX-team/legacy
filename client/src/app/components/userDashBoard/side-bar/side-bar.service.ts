import { Injectable } from "@angular/core";
import { HttpService } from "../../../services/http.service";

import {
  Router,
} from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SideBarService {
  data = new Subject<any>();
  dataSource = this.data.asObservable();
  constructor(private http: HttpService, private router: Router) {}
  search(query, usedfor) {
    return this.http.getRequest(`/search?keyword=${query}&usedfor=${usedfor}`);
  }
  logOut(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    this.router.navigate(["/home"]);
  }
}
