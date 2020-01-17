import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(obj):Observable<any>{
    return this.http
      .post("http://127.0.0.1:4000/api/user/signUp",obj)
     // .subscribe(data => {}); //when intergrated uncomment this part
    //console.log(data);
  }

  signin(obj):Observable<any>{
    return this.http
      .post("http://127.0.0.1:4000/api/user/logIn",obj)
     // .subscribe(data => {}); //when intergrated uncomment this part
    //console.log(data);
  }
}
