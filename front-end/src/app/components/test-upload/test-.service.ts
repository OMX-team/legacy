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
    let formData = new FormData();
    formData.append("photo", photo);

    return this.http.post(
      `https://omx-backend.herokuapp.com/api/user/5e202f545eb7ee3a0c5e4748/uploadImage`,
      formData,
      this.httpOptions
    );
  }
}
