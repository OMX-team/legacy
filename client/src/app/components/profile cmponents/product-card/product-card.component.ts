import { Component, OnInit, Input } from "@angular/core";
import { ServicesService } from "../../services/services.service";
@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  counter = 0;
  constructor(private service: ServicesService) {}
  info;
  id;
  render: boolean = false;
  async ngOnInit() {
    this.id = window.location.pathname.split("/")[2];
    this.info = await this.service.getUserProducts(this.id).toPromise();
    console.log(this.info);
    this.render = true;
  }
  nextProduct($event) {
    if (this.counter >= this.info.products.length - 1) {
      this.counter = 0;
      return;
    }
    this.counter++;
    console.log(this.info);
  }
  previousProduct($event) {
    if (this.counter === 0) {
      this.counter = this.info.products.length;
    }
    this.counter--;
  }
}
