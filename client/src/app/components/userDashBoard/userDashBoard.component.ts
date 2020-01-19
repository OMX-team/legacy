import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-userDashBoard",
  templateUrl: "./userDashBoard.component.html",
  styleUrls: ["./userDashBoard.component.css"]
})
export class UserDashBoardComponent implements OnInit {
  userId = window.location.pathname.split("/")[2]; //should be coded

  constructor() {}
  ngOnInit() {
    console.log(this.userId);
    this.hideSideNav();
  }

  hideSideNav() {
    $("#sidebar").hasClass("visible") || !$("#sidebar").hasClass()
      ? $("#sidebar").attr("class", "")
      : "";
  }
}
