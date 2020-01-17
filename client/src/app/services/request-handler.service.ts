import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {

  constructor(private http: HttpService) {
  }
  getProducts() {
    return this.http.getRequest('/product')
  }
  getUsers() {
    return this.http.getRequest('/user')
  }
  search(query, usedfor) {
    return this.http.getRequest(`/search?keyword=${query}&usedfor=${usedfor}`)
  }
  postProduct(data) {
    return this.http.postRequest(data, '/product');
  }

}
