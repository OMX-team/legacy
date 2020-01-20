import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SideBarService } from "./side-bar.service";
import $ from "jquery";
@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  query: String = "";
  usedfor: String = "People";
  usedforArray = ["Products", "People"];
  users;
  constructor(private service: SideBarService) {}
  @Input() user: String;
  showSideNav() {
    $("#sidebar").toggleClass("visible");
  }
  onSearch(event) {
    event.preventDefault();
    this.service.search(this.query, this.usedfor).subscribe(result => {
      this.usedfor == "Products"
        ? this.service.data.next(result)
        : (this.users = result);
      this.query = "";
    });
  }
  ngOnInit() {}
}
