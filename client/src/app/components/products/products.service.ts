import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service'
@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpService) {
  }
  getProducts() {
    return this.http.getRequest('/product/all')
  }

}
