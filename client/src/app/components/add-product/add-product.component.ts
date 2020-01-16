import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'
import { RequestHandlerService } from '../../services/request-handler.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  categorys = ['Electronics', 'Clothes', 'Fourniture', 'Medical', 'Garbage', 'Jwery']

  submitted = false;

  product = new Hero('', '', false, 1000, 1, true, '')
  constructor(private requestHandler: RequestHandlerService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.product)
    this.requestHandler.postProduct(this.product)
      .subscribe(result => {
        console.log(result)
      }, err => console.log(err))

  }
}
