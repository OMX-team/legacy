<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { LoginService } from './log-in.service'
=======
=======
>>>>>>> 13c51e9a2ea95d07d1a4503ffa5d712899596b91
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth-service/auth.service"
<<<<<<< HEAD

>>>>>>> 9f8acff878a9622fd288021db1f57761b73703e1
=======
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from "@angular/forms";
=======
>>>>>>> 13c51e9a2ea95d07d1a4503ffa5d712899596b91

>>>>>>> parent of 9732991... merged
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  logged: Boolean = false;
  responseData;
  constructor(
    private loginService: LoginService) { }
=======
  constructor() {}
>>>>>>> parent of 9732991... merged

=======
  constructor(private service: AuthService) { }
  
>>>>>>> 9f8acff878a9622fd288021db1f57761b73703e1
=======
  constructor(private service: AuthService) { }
  
>>>>>>> 13c51e9a2ea95d07d1a4503ffa5d712899596b91
  profileForm = new FormGroup({
    loginFormModalEmail: new FormControl(""),
    loginFormModalPassword: new FormControl("")
  });

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl("", Validators.email),
      loginFormModalPassword: new FormControl("", Validators.required),
      signupFormModalName: new FormControl("", Validators.required),
      signupFormModalEmail: new FormControl("", Validators.email),
      signupFormModalPassword: new FormControl("", Validators.required)
    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get("loginFormModalEmail");
  }

  get loginFormModalPassword() {
    return this.validatingForm.get("loginFormModalPassword");
  }
  get signupFormModalName() {
    return this.validatingForm.get("signupFormModalName");
  }

  get signupFormModalEmail() {
    return this.validatingForm.get("signupFormModalEmail");
  }

  get signupFormModalPassword() {
    return this.validatingForm.get("signupFormModalPassword");
  }

<<<<<<< HEAD
<<<<<<< HEAD
  loginUser(f: NgForm, event) {
    event.preventDefault();
    this.loginService.logIn(f.value)
      .subscribe(result => {
        console.log(result)
        this.responseData = <any>result
        localStorage.setItem("token", this.responseData.token)
        this.logged = true;
      }
        , err => {
          localStorage.removeItem("token")
          console.log(err)
        })
  }
  signupUser(f1: NgForm, event) {
    console.log(f1.value);
=======
  onSubmit(f: NgForm) {

    console.log(f.value);  // { first: '', last: '' }

  
  }

  onSubmit1(f1: NgForm) {
    console.log(f1.value);  // { first: '', last: '' }
    let res = this.service.submit(f1.value).subscribe(data=>console.log(data))
    console.log(res,"/////")
>>>>>>> 9f8acff878a9622fd288021db1f57761b73703e1
=======
  onSubmit(f: NgForm) {

    console.log(f.value);  // { first: '', last: '' }
    let res = this.service.signin(f.value).subscribe(data=>{
      localStorage.setItem("token", data.token)  
      
      console.log(data)
    })
  
  }

  onSubmit1(f1: NgForm) {
    console.log(f1.value);  // { first: '', last: '' }
<<<<<<< HEAD
>>>>>>> parent of 9732991... merged
=======
    let res = this.service.signUp(f1.value).subscribe(data=>{console.log(data)})
    console.log(res,"/////")
>>>>>>> 13c51e9a2ea95d07d1a4503ffa5d712899596b91
  }
}
