
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth-service/auth.service"
import $ from 'jquery'
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;

  logged: Boolean = false;
  responseData;
  redirectUrl = '/dashboard'

  constructor(private service: AuthService, private router: Router) { }

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

  loginUser(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
    this.service.signin(f.value).subscribe(data => {
      this.responseData = data
      console.log(this.responseData)
      localStorage.setItem("username", this.responseData.username)
      localStorage.setItem("id", this.responseData._id)
      if (this.responseData.success) {
        localStorage.setItem("token", this.responseData.token)
        this.logged = true;
        this.router.navigate([this.redirectUrl]);
      }
    }, err => {
      localStorage.removeItem("token")
      this.logged = false;
    })
    // $('.modal-dialog').hide()
    this.responseData = undefined;
  }

  signupUser(f1: NgForm) {
    this.service.signUp(f1.value).subscribe(data => {
      console.log(data)
      this.responseData = data;
      if (this.responseData.success) {
        this.router.navigate(['/home']);
        $('#signUpform.modal-dialog').show()
      } else {
        console.log('failed signup')
      }
    })
  }

}
