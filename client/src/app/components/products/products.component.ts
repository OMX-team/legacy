import { Component, OnInit, resolveForwardRef, Input } from '@angular/core';
import { ProductsService } from './products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Object;
  constructor(private service: ProductsService) { }
  @Input() srhProducts: Object;

  ngOnInit() {
    this.service.getProducts()
      .subscribe(results => {
        this.products = results;
        console.log(this.products)
      })
  }
}
