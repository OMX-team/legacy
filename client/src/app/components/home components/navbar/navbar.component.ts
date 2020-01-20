<<<<<<< HEAD

import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
=======
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output
} from "@angular/core";
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../auth-service/auth.service";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;
  @ViewChild("frame", { static: true }) frame: any;
  @ViewChild("frame1", { static: true }) frame1: any;

  logged: Boolean = false;
<<<<<<< HEAD
  constructor(private service: AuthService, private router: Router) { }
=======
  redirectUrl = "/dashboard";
  email: String = "";
  username: String = "";
  constructor(private service: AuthService, private router: Router) {}
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186

  profileForm = new FormGroup({
    loginFormModalEmail: new FormControl(""),
    loginFormModalPassword: new FormControl("")
  });

  ngOnInit() {
    console.log(this.frame1);
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
    if (f.submitted) {
      this.service.signin(f.value).subscribe(
        data => {
          localStorage.setItem("username", data["username"]);
          localStorage.setItem("id", data["_id"]);
          console.log(data)
          if (data["success"]) {
            localStorage.setItem("token", data["token"]);
            this.logged = true;
            this.frame.hide();
            this.router.navigate(['/dashboard']);
          }
        },
        err => {
          localStorage.removeItem("token");
          this.logged = false;
        }
      );
    }
  }

  signupUser(f1: NgForm) {
    if (f1.submitted) {
<<<<<<< HEAD
      localStorage.setItem("username", f1.value["username"])
      this.service.signUp(f1.value).subscribe(data => {
        if (data["err"]) {
=======
      this.email = f1.value["email"];
      this.username = f1.value["username"];
      this.service.user = this.username;

      this.service.signUp(f1.value).subscribe(data => {
        if (data["err"]) {
          console.log("error");
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
          return;
        }
        this.router.navigate(["/verify_Email"]);
        this.frame1.hide(), err => console.log(err);
      });
    }
  }
}
