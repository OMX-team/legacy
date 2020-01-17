import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service'
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpService) { }
  logIn(data) {
    return this.http.postRequest(data, '/user/login')
  }
}
