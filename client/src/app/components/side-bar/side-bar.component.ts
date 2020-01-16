import { Component, OnInit, Input } from '@angular/core';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import $ from 'jquery'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  query: String = "";
  usedfor: String = "Products";
  usedforArray = ['Products', 'People'];
  constructor(private requestHandler: RequestHandlerService) {
  }
  @Input() user: String
  showSideNav() {
    $("#sidebar").toggleClass("visible");
  }
  onSearch(event) {
    event.preventDefault();
    // make search api funciontionality later
    console.log(this.query, this.usedfor)
    this.requestHandler.getUsers()
      .subscribe(result => {
        console.log(result)
        this.query = "";
      })
  }
  ngOnInit() {
  }
}
