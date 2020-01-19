import { Component, OnInit, Input, } from '@angular/core';
import { VerifyService } from './verify.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  code: String = "";
  success = null;
  @Input() email: String;
  @Input() username: String;
  constructor(private service: VerifyService, private router: Router) { }

  ngOnInit() {

  }
  verify() {

    this.service.verify(this.username, this.code)
      .subscribe(result => {
        console.log(result)
        if (result["success"]) {
          localStorage.setItem("token", result["token"])
          this.success = true
          this.router.navigate(['/dashboard'])
        } else {
          this.success = false
        }
      })
    this.code = "";
  }
  reSend() {
    //send post request to the backend
    this.service.reSend(this.email, this.username)
  }
}
