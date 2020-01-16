import { Component, OnInit, Input } from '@angular/core';

import $ from 'jquery'
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  query: String = "";
  constructor(private requestHandler: RequestHandlerService) {
  }
  @Input() user: String
  showSideNav() {
    $("#sidebar").toggleClass("visible");
  }
  onSearch() {
    // make search api funciontionality later
    this.requestHandler.getUsers()
      .subscribe(result => {
        console.log(result)
        this.query = "";
      })
  }
  ngOnInit() {
  }
}
