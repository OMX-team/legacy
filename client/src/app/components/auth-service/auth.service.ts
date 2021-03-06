import { Injectable } from '@angular/core';
import { HttpService } from "../../services/http.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  signUp(user) {
    return this.http.postRequest(user, "/user/signUp")
  }

  signin(data) {
    return this.http.postRequest(data, "/user/logIn")
  }
}
