import { Component, OnInit } from '@angular/core';
import { RequestHandlerService } from '../../services/request-handler.service'
import { HttpService } from '../../services/http.service'

import $ from 'jquery'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: String = "Adam";

  constructor(
    private requestHandler: RequestHandlerService,
    private httpService: HttpService
  ) { }
  ngOnInit() {
    this.hideSideNav()

  }
  hideSideNav() {
    $('#sidebar').hasClass('visible') || !$('#sidebar').hasClass() ?
      $("#sidebar").attr("class", "") : ''
  }

}
