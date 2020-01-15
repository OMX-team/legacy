import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor() {
  }
  @Input() user: String
  clicker() {
    $("#sidebar").toggleClass("visible");
  }
  ngOnInit() {
  }
}
