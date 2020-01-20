import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  url: string = "http://localhost:4000/api";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token")
    })
  };
  getRequest(method) {
    return this.http.get(this.url + method);
  }
  postRequest(data = {}, method) {
    console.log(this.httpOptions)
    return this.http.post(this.url + method, data, this.httpOptions);
  }
  followAFriend(id){
    this.http.get(`${this.url}/user/${id}/follow`, this.httpOptions).subscribe(data => console.log(data))
  }
}
