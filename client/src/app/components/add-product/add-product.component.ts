import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  categroys = ['Electronics', 'Clothes', 'Fourniture', 'Medical', 'Garbage', 'Jwery',]
  submitted = false;
  product = new Hero('IphoneX', 'brand new I phoneX', 500, 1, true, 'Electronics', '')
  constructor() { }

  ngOnInit() {
  }
  get diagnostic() { return JSON.stringify(this.product); }
}
