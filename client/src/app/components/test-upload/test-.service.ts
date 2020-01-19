import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token")
    })
  };

  uploadToServer(photo) {
    return this.http.post(
      `http://localhost:4000/api/user/5e202f545eb7ee3a0c5e4748/uploadImage`,
      { photo },
      this.httpOptions
    );
  }
}
