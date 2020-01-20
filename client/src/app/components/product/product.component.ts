import { Component, OnInit, Input, Output } from '@angular/core';
import {$}from "jquery"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() srhProducts: Object;
  @Input() product: Object
  ngOnInit() {
  }

}
