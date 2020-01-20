import { Component, OnInit } from "@angular/core";
import { Hero } from "../../../hero";
import { AddProductService } from "./add-product.service";
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  categorys = [
    "Electronics",
    "Clothes",
    "Fourniture",
    "Medical",
    "Garbage",
    "Jwery"
  ];

  submitted = false;

  product = new Hero("", "", false, 1000, 1, true, "");
  constructor(private service: AddProductService) {}

  ngOnInit() {}
  onSubmit() {
    console.log('submitted')
    console.log(this.product);
    this.service.postProduct(this.product).subscribe(
      result => {
        console.log("request sent!!!", result);
      },
      err => console.log(err)
    );
  }
}
