import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  info;
  render: boolean = false;
  id = window.location.pathname.split("/")[2];
  constructor(private service: ServicesService) {}
  async ngOnInit() {
    this.info = await this.service.getUserInfo(this.id).toPromise();
    this.info = this.info.user;
    this.render = true;
  }
}
