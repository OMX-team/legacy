import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

  constructor(private service: VerifyService, private router: Router) { }

  ngOnInit() {

  }
  verify(event) {
    if (!!this.success) {
      this.router.navigate(['/home'])
      return;
    }
    event.preventDefault()
    this.service.verify(localStorage.getItem("username"), this.code)
      .subscribe(result => {
        console.log('before success',
          'result', result)
        if (result["success"]) {
          console.log('after success')
          localStorage.setItem("token", result["token"])
          this.success = true
          console.log(this.success)
          this.router.navigate(['/dashboard'])
        } else {
          this.success = false
        }
      })
  }
  reSend() {
    if (this.success) {
      return;
    }
    console.log(this.username)
    //send post request to the backend
    this.service.reSendVerifyMsg(this.username)
  }
}
