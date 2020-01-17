import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  info;
  id;
  constructor(private service: ServicesService) {}
  ngOnInit() {
    this.id = window.location.pathname.split("/")[2];
    this.service.getUserInfo(this.id).subscribe(data => {
      this.info = data.user;
      console.log(this.info);
    });
  }
}
