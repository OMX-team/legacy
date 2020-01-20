import { Component, OnInit, Input, Output } from '@angular/core';
import {$}from "jquery"
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() srhProducts: Object;
  @Input() product: Object
  ngOnInit() {
  }
  goToProfile(product){
    this.router.navigate([`/profile/${product.user._id}`])
  }
}
