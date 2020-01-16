import { Component, OnInit, resolveForwardRef, Input } from '@angular/core';
import { RequestHandlerService } from '../../services/request-handler.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Object;
  constructor(private requestHandler: RequestHandlerService) { }
  @Input() srhProducts: Object;

  ngOnInit() {
    this.requestHandler.getProducts()
      .subscribe(results => {
        this.products = results;
        console.log(this.products)
      })
  }
}
