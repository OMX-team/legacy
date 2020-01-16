import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url: string = 'https://reqres.in/api'
  constructor(private http: HttpClient) {
  }
  //this causes alot of bugs need to learn how to use probably

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }


  getRequest(method) {
    return this.http.get(this.url + method)
  }
  postRequest(data = {}, method) {
    return this.http.post(this.url + method, JSON.stringify(data))
  }
}
