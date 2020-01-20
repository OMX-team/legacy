import { Component, OnInit, resolveForwardRef, Input } from "@angular/core";
import { ProductsService } from "./products.service";
import { SideBarService } from "../side-bar/side-bar.service";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(
    private service: ProductsService,
    private sidebarService: SideBarService
  ) {}
  products: object;
  ngOnInit() {
    this.sidebarService.dataSource.subscribe(data => {
      if (data.products.length) this.products = data.products;
    });
    this.service.getProducts().subscribe(results => {
      this.products = results;
    });
  }
}
