import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class VerifyService {
  constructor(private http: HttpService) {}

  verify(username, code) {
    return this.http.postRequest({ username, code }, "/user/verify");
  }
  reSendVerifyMsg(username) {
    return this.http.postRequest({ username }, "/user/resend-msg");
  }
}
