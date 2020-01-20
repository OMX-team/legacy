<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { BehaviorSubject } from 'rxjs';

=======
import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { Subject } from "rxjs";
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
@Injectable({
  providedIn: "root"
})

export class VerifyService {
  constructor(private http: HttpService) {}

<<<<<<< HEAD
  constructor(private http: HttpService) { }
=======
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
  verify(username, code) {
    return this.http.postRequest({ username, code }, "/user/verify");
  }
  reSendVerifyMsg(username) {
    return this.http.postRequest({ username }, "/user/resend-msg");
  }
}
