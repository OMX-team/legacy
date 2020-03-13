import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  updateRating(rating, id) {
    const obj = { rating, id };
    let data = this.http
      .patch(`https://omx-backend.herokuapp.com/api/user/ratings/`, obj)
      .subscribe(data => {
        console.log(data);
      });
  }

  getUserInfo(id): Observable<any> {
    return this.http.get(`https://omx-backend.herokuapp.com/api/user/${id}`);
  }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token")
    })
  };

  getUserProducts(id): Observable<any> {
    return this.http.get(
      `https://omx-backend.herokuapp.com/api/user/${id}/products`,
      this.httpOptions
    );
  }
  getUserFollowers(id): Observable<any> {
    return this.http.get(
      `https://omx-backend.herokuapp.com/api/user/${id}/followers`,
      this.httpOptions
    );
  }
  getUserFollowings(id): Observable<any> {
    return this.http.get(
      `https://omx-backend.herokuapp.com/api/user/${id}/followings`,
      this.httpOptions
    );
  }
}
