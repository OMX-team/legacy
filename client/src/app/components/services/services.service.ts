import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  updateRating(rating, id) {
    const obj = { rating, id };
    let data = this.http
      .patch(`http://localhost:4000/api/user/ratings/`, obj)
      .subscribe(data => {});
    // console.log(id);
  }
  getUserInfo(id): Observable<any> {
    return this.http.get(`http://127.0.0.1:4000/api/user/${id}`);
  }
  getUserProducts(id): Observable<any> {
    return this.http.get(`http://127.0.0.1:4000/${id}/products`);
  }
}
