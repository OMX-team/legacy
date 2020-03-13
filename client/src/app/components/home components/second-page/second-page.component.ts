import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-second-page",
  templateUrl: "./second-page.component.html",
  styleUrls: ["./second-page.component.scss"]
})
export class SecondPageComponent implements OnInit {
  data = [
    {
      name: "iphonex",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 1000,
      img:
        "https://image.businessinsider.com/5d7c05a92e22af27f9282594?width=1100&format=jpeg&auto=webp"
    },
    {
      name: "mercedes",
      description:
        "this item is new realeased in 2019 and he is the best i mercedes ever made",
      price: 1000000,
      img: "https://i.ytimg.com/vi/kEtsCon5_d8/maxresdefault.jpg"
    },
    {
      name: "vape",
      description:
        "this item is new realeased in 2019 and he is the best i vape ever made",
      price: 200,
      img:
        "https://cdn.shopify.com/s/files/1/2256/8871/products/vape-mods-voopoo-drag-157w-gene-chip-tc-box-mod-11_1024x1024_94960606-a610-40f9-b958-8bcd92ef4f23_650x.jpg?v=1525308653"
    },
    {
      name: "house",
      description:
        "this item is new realeased in 2019 and he is the best i house ever made",
      price: 100000,
      img:
        "https://www.control4.com/files/large/d1c4382a043a2f0152963aa2e6d65f46.jpeg"
    },
    {
      name: "Tshirt",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 10,
      img:
        "https://i.pinimg.com/originals/08/51/90/08519038bbdc12804ea9299d7811ba3b.jpg"
    },
    {
      name: "huawei y9 ",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 650,
      img: "https://k.nooncdn.com/t_desktop-pdp-v1/v1539176920/N18768183A_1.jpg"
    },
    {
      name: "bmw",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 100050,
      img: "https://cdn.motor1.com/images/mgl/vEJmQ/s1/bmw-i8-m-rendering.jpg"
    },
    {
      name: "gamer pc",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 3000,
      img:
        "https://cnet3.cbsistatic.com/img/LCy5cxvoZhjahWJbXX200pgimc0=/2018/01/10/2546f4da-0a4b-4b53-9b48-a7cae2604afb/razer-chroma-overwatch.png"
    },
    {
      name: "chair",
      description:
        "this item is new realeased in 2019 and he is the best i phone ever made",
      price: 7,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/41j7qiElDdL._SL500_.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
