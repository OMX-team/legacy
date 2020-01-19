import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token")
    })
  };

  checkToken(): Observable<any> {
    return this.http.get(`http://localhost:4000/api/user/me`, this.httpOptions);
  }
}
