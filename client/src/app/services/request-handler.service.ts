import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {

  constructor(private http: HttpService) {
  }
  getProducts() {
  }
  getUsers() {
    return this.http.getRequest('/user')
  }


}
