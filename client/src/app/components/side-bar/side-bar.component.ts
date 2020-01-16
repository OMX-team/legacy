import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  query: String = "";
  constructor() {
  }
  @Input() user: String
  showSideNav() {
    $("#sidebar").toggleClass("visible");
  }
  onSearch() {
    // make search api funciontionality later
    console.log(this.query)
    this.query = "";
  }
  ngOnInit() {
  }
}
