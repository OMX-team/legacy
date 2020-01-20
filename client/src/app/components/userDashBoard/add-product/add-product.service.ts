import { Injectable } from "@angular/core";
import { HttpService } from "../../../services/http.service";
@Injectable({
  providedIn: "root"
})
export class AddProductService {
  constructor(private http: HttpService) {}
  postProduct(data) {
    return this.http.postRequest(data, "/product/add");
  }
}
