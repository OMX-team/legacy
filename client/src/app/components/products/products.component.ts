import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dummyData = [
    {
      id: 1,
      name: "smartPhone"
    },
    {
      id: 2,
      name: "TV"
    },
    {
      id: 3,
      name: "HairDryer",
    },
    {
      id: 4,
      name: "IDK"
    },
  ]
  constructor() { }

  ngOnInit() {
    //pass the dummy data to the product component
  }

}
