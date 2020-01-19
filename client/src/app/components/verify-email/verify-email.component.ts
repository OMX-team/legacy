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
  success: Boolean = false;
  @Input() email: String;
  @Input() username: String;
  constructor(private service: VerifyService, private router: Router) { }

  ngOnInit() {

  }
  verify() {

    this.service.verify(this.username, this.code)
      .subscribe(result => {
        if (result["success"]) {
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
    this.verify()
  }
}
