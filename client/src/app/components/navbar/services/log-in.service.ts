import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LogInService {
  constructor(private http: HttpClient) {}
  logIn(userName, password) {
    this.http
      .post("http://localhost:4000/api/user/logIn", {
        userName,
        password
      })
      .subscribe(data => console.log(data));
  }
}
