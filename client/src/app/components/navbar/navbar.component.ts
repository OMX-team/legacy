import { Component, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { LoginService } from './log-in.service'
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;
  logged: Boolean = false;
  responseData;
  constructor(
    private loginService: LoginService) { }

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
  }
}
