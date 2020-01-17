import { Component, OnInit } from '@angular/core';


import $ from "jquery";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  username: String = "Adam";

  constructor() { }
  ngOnInit() {
    this.hideSideNav();
  }
  hideSideNav() {
    $("#sidebar").hasClass("visible") || !$("#sidebar").hasClass()
      ? $("#sidebar").attr("class", "")
      : "";
  }
}
