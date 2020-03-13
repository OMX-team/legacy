import { Component, OnInit } from "@angular/core";
import { VerifyService } from "./verify.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth-service/auth.service";
@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"]
})
export class VerifyEmailComponent implements OnInit {
  email = "";
  code: String = "";
  success = null;

  constructor(
    private service: VerifyService,
    private router: Router,
    private navService: AuthService
  ) {}
  username = "s";

  async ngOnInit() {
    this.username = this.navService.user;
  }
  verify(event) {
    if (!!this.success) {
      this.router.navigate(["/home"]);
      return;
    }

    event.preventDefault();
    console.log("the other ", this.username);
    this.service.verify(this.username, this.code).subscribe(result => {
      if (result["success"]) {
        localStorage.setItem("token", result["token"]);
        this.success = true;
        this.router.navigate(["/"]);
      } else {
        this.success = false;
      }
    });
  }
  reSend() {
    if (this.success === true) {
      this.router.navigate(["/home"]);
    }
    //send post request to the backend
    if (!!this.username) this.service.reSendVerifyMsg(this.username);
  }
}
