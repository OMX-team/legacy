import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
import { Router } from "@angular/router";
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: "app-freinds",
  templateUrl: "./freinds.component.html",
  styleUrls: ["./freinds.component.scss"]
})
export class FreindsComponent implements OnInit {
  id = window.location.pathname.split("/")[2];
  followings;
  followers;
  constructor(private service: ServicesService, private router: Router, private http : HttpService) {}

  async ngOnInit() {
    this.followings = await this.service.getUserFollowings(this.id).toPromise();
    console.log(this.followings);
    this.followers = await this.service.getUserFollowers(this.id).toPromise();
    console.log(this.followers);
  }
  async goToUser(id) {
    await this.router.navigate([`/profile/${id}`]);
    console.log("hi");
    location.reload();
  }

  followFriend(){
    this.http.followAFriend(this.id)
  }
}
