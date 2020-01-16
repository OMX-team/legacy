import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  url: string = 'http://localhost:4000/api'
  constructor(private http: HttpClient) {
  }

  //This causes alot of bugs need to learn how to use probably
  // If I want send to post request I need to work the header

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
