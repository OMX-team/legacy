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

<<<<<<< HEAD
  constructor(private service: VerifyService, private router: Router) { }

  ngOnInit() { }
=======
  // @Input() email: String;
  // @Input() username: String;
  constructor(
    private service: VerifyService,
    private router: Router,
    private navService: AuthService
  ) {}
  username;

  async ngOnInit() {
    this.username = this.navService.user;
  }
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
  verify(event) {
    if (!!this.success) {
      this.router.navigate(['/home'])
      return;
    }
<<<<<<< HEAD
    event.preventDefault()
    this.service.verify(localStorage.getItem("username"), this.code)
      .subscribe(result => {
        console.log('before success',
          'result', result)
        if (result["success"]) {
          localStorage.setItem("token", result["token"])
          this.success = true
          this.router.navigate(['/dashboard'])
        } else {
          this.success = false
        }
      })
=======

    event.preventDefault();
    console.log("the other ", this.username);
    this.service.verify(this.username, this.code).subscribe(result => {
      console.log(result);
      if (result["success"]) {
        localStorage.setItem("token", result["token"]);
        this.success = true;
        console.log(this.success);
        this.router.navigate(["/dashboard"]);
      } else {
        this.success = false;
      }
    });
>>>>>>> a1b5b9accedfd88a8a8701d2b594e6260ed87186
  }
  reSend() {
    if (!!this.success) {
      this.router.navigate(['/home'])
    }
    //send post request to the backend
    this.service.reSendVerifyMsg(localStorage.getItem("username"))
  }
}
