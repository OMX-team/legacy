import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  constructor() {}
  @Input() product: Object;
  ngOnInit() {}
  onSubmit() {}
}
