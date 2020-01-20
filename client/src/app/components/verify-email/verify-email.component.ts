import { Component, OnInit, Input } from "@angular/core";
import { VerifyService } from "./verify.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"]
})
export class VerifyEmailComponent implements OnInit {
  code: String = "";
  success = null;
  @Input() email: String;
  @Input() username: String;
  constructor(private service: VerifyService, private router: Router) {}

  ngOnInit() {}
  verify(event) {
    if (this.success) {
      return;
    }
    event.preventDefault();
    this.service.verify(this.username, this.code).subscribe(result => {
      if (result["success"]) {
        localStorage.setItem("token", result["token"]);
        this.success = true;
        console.log(this.success);
        this.router.navigate(["/dashboard"]);
      } else {
        this.success = false;
      }
    });
  }
  reSend() {
    if (this.success) {
      return;
    }
    //send post request to the backend
    this.service.reSendVerifyMsg(this.username);
  }
}
