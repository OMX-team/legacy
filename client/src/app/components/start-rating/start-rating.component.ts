import { Component, OnInit, Input } from "@angular/core";
import { ServicesService } from "../services/services.service";

@Component({
  selector: "app-start-rating",
  templateUrl: "./start-rating.component.html",
  styleUrls: ["./start-rating.component.scss"]
})
export class StartRatingComponent implements OnInit {
  value = 0;
  id;
  constructor(private service: ServicesService) {}
  @Input() id;
  ngOnInit() {}
  rateValue(event) {
    console.log(this.value);
    console.log(event.target.innerText);
    this.value = parseInt(event.target.innerText);
    this.service.updateRating(this.value, this.id);
  }
}
