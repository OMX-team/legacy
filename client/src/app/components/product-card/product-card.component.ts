import { Component, OnInit, Input } from "@angular/core";
import { ServicesService } from "../services/services.service";
@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  counter = 0;
  // products = [
  //   {
  //     title: "phone",
  //     description: `this is my iphone x it's still new`,
  //     image:
  //       "https://assets.newatlas.com/dims4/default/219f451/2147483647/strip/true/crop/1518x1013+141+0/resize/1160x774!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2Farchive%2Fnokia-3310-inspired-smartphone-6.jpg"
  //   },
  //   {
  //     title: "car",
  //     description: `My lamorghini for sale contact me for more details`,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgeR3TGCobxwOHQYEBYtlHfnXzSjbdv48paepwkiy8cMrVtXb&s"
  //   },
  //   {
  //     title: "dog",
  //     description: `this is my dog habhab`,
  //     image:
  //       "https://d3gvybjp3zjp3i.cloudfront.net/wp-content/uploads/2019/08/AMC-Tigers.jpg"
  //   }
  // ];

  constructor(private service: ServicesService) {}
  info;
  id;
  ngOnInit() {
    this.id = window.location.pathname.split("/")[2];
    this.service.getUserProducts(this.id).subscribe(data => {
      console.log(data);
      this.info = data;
    });
  }
  nextProduct($event) {
    if (this.counter >= this.info.length - 1) {
      this.counter = 0;
      return;
    }
    this.counter++;
    // console.log(this.info);
  }
  previousProduct($event) {
    if (this.counter === 0) {
      this.counter = this.info.length;
    }
    this.counter--;
  }
}
