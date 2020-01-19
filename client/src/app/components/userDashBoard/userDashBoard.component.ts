import { Component, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-userDashBoard",
  templateUrl: "./userDashBoard.component.html",
  styleUrls: ["./userDashBoard.component.css"]
})
export class UserDashBoardComponent implements OnInit {
  username: String = "Adam"; //should be coded

  constructor() {}
  ngOnInit() {
    this.hideSideNav();
  }

  hideSideNav() {
    $("#sidebar").hasClass("visible") || !$("#sidebar").hasClass()
      ? $("#sidebar").attr("class", "")
      : "";
  }
}
