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
  usedfor: String = "People";
  usedforArray = ['Products', 'People'];
  users;
  products;
  constructor(private requestHandler: RequestHandlerService) {
  }
  @Input() user: String
  showSideNav() {
    $("#sidebar").toggleClass("visible");
  }
  onSearch(event) {
    event.preventDefault();
    this.requestHandler.search(this.query, this.usedfor)
      .subscribe(result => {
        this.usedfor == 'Products' ?
          this.products = result
          :
          this.users = result;
        this.query = "";
        console.log('users', this.users.users)
      })
  }
  ngOnInit() {
  }
}
