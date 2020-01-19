import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private service: HomeService, private router: Router) {}
  info;
  render: boolean = false;
  async ngOnInit() {
    this.info = await this.service
      .checkToken()
      .toPromise()
      .then(res => this.router.navigateByUrl(`dashboard/${res._id}`))
      .catch(err => (this.render = true));
  }
}
