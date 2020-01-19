import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VerifyService {
  signupForm = new BehaviorSubject

  constructor(private http: HttpService) { }
  verify(username, code) {
    console.log('entering verify funciton')
    return this.http.postRequest({ username, code }, '/user/verify')
  }
  reSendVerifyMsg(username) {
    return this.http.postRequest({ username }, '/user/resend-msg')
  }
}
