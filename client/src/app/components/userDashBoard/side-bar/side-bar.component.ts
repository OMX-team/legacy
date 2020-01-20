import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SideBarService } from "./side-bar.service";
import $ from "jquery";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  query: String = "";
  usedfor: String = "People";
  usedforArray = ["Products", "People"];
  users;
  id = window.location.pathname.split("/")[2]
  constructor(private service: SideBarService,private router: Router) {}
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
goToUser(id){
 
   this.router.navigate([`/profile/${id}`])
}
  profile (){
    console.log(`/profile/${this.id}`)
    this.router.navigate([`/profile/${this.id}`]);
  }

  logOut(): void {
    localStorage.removeItem("token");
    // this.logged = false;
    this.router.navigate(["/home"]);
  }
}
