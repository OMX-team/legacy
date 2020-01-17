import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth-service/auth.service"

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;
  constructor(private service: AuthService) { }
  
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

  onSubmit(f: NgForm) {

    console.log(f.value);  // { first: '', last: '' }
    let res = this.service.signin(f.value).subscribe(data=>{
      localStorage.setItem("token", data.token)  
      
      console.log(data)
    })
  
  }

  onSubmit1(f1: NgForm) {
    console.log(f1.value);  // { first: '', last: '' }
    let res = this.service.signUp(f1.value).subscribe(data=>{console.log(data)})
    console.log(res,"/////")
  }
}
