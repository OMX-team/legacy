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
  code: String = "";
  success = null;

  constructor(
    private service: VerifyService,
    private router: Router,
    private navService: AuthService
  ) {}
  username;

  async ngOnInit() {
    this.username = this.navService.user;
  }
  verify(event) {
    if (!!this.success) {
      this.router.navigate(['/home'])
      return;
    }

    event.preventDefault();
    console.log("the other ", this.username);
    this.service.verify(this.username, this.code).subscribe(result => {
      console.log(result);
      if (result["success"]) {
        localStorage.setItem("token", result["token"]);
        this.success = true;
        this.router.navigate(["/"]);
        // location.reload()
      } else {
        this.success = false;
      }
    });
  }
  reSend() {
    if (!!this.success) {
      this.router.navigate(['/home'])
    }
    //send post request to the backend
    this.service.reSendVerifyMsg(localStorage.getItem("username"))
  }
}
