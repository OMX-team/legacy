import { Component, OnInit, Input } from "@angular/core";
import { ServicesService } from "../../services/services.service";

@Component({
  selector: "app-start-rating",
  templateUrl: "./start-rating.component.html",
  styleUrls: ["./start-rating.component.scss"]
})
export class StartRatingComponent implements OnInit {
  value = 0;
  rate;
  id = window.location.pathname.split("/")[2];
  constructor(private service: ServicesService) {}
  //  @Input() id;
  async ngOnInit() {
    let data = await this.service.getUserInfo(this.id).toPromise();
    // console.log(data);
    this.rate = parseFloat(data.user.rating).toFixed(2);
    // console.log(this.rate)
  }
            rateValue($event) {
             this.value = parseInt($event.target.value);
             this.service.updateRating(this.value, this.id);
            }
}
