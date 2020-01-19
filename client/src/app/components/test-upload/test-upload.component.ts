import { Component, OnInit } from "@angular/core";
import { TestService } from "./test-.service";
import { async } from "@angular/core/testing";
@Component({
  selector: "app-test-upload",
  templateUrl: "./test-upload.component.html",
  styleUrls: ["./test-upload.component.scss"]
})
export class TestUploadComponent implements OnInit {
  constructor(private service: TestService) {}
  photo = null;
  info;
  ngOnInit() {}
  onFileUpload(event) {
    this.photo = event.target.files[0];
  }
  upload() {
    this.service
      .uploadToServer(this.photo)
      .toPromise()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
