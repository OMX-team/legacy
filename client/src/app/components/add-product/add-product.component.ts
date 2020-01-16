import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  categorys = ['Electronics', 'Clothes', 'Fourniture', 'Medical', 'Garbage', 'Jwery']

  submitted = false;

  product = new Hero('', '', 1000, 1, true, '', '')
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.product)
  }
}
