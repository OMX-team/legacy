import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'
@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpService) {
  }
  verify(username, code) {
    return this.http.postRequest({ username, code }, '/verify')
  }
}
