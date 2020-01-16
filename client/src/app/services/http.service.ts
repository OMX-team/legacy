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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ' "   jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZWFjdGl2YXRlZCI6ZmFsc2UsInJhdGluZyI6MC45OTYwOTM3NSwiX2lkIjoiNWUyMDJmNTQ1ZWI3ZWUzYTBjNWU0NzQ4IiwidXNlcm5hbWUiOiIzYWJkYWxhMzIiLCJmaXJzdG5hbWUiOiJhYSIsImxhc3RuYW1lIjoiYmIiLCJnZW5kZXIiOiJhIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInBob25lIjoxMjEyMTIyNCwiYmlydGhkYXRlIjoiMjAxNi0wNS0yNVQxMDowNTo0NC4wMDBaIiwiX192IjowLCJpYXQiOjE1NzkxOTIyMzEsImV4cCI6MTU3OTc5NzAzMX0.yjfW4zSr_U7-yUaRzIjksJQoKyDL07XqobaJTXpksWk"'
    })
  }


  getRequest(method) {
    return this.http.get(this.url + method)
  }
  postRequest(data = {}, method) {
    console.log('form http service', data)
    return this.http.post(this.url + method, data, this.httpOptions)
  }
}
