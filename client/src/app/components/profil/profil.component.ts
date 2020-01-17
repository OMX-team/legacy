import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services/services.service";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  info;

  constructor(private service: ServicesService) {}
  ngOnInit() {
    const id = window.location.pathname.split("/")[2];
    this.service.getUserInfo(id).subscribe(data => {
      this.info = data;
      console.log(data);
    });
  }
}
