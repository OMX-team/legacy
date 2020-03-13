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
  ngOnInit() {}
  onFileUpload(event) {
    this.photo = event.target.files[0];
    console.log(this.photo);
  }
  upload() {
    console.log({ photo: this.photo });
    this.service
      .uploadToServer(this.photo)
      .toPromise()
      .then(res => console.log(res))
      .catch(err => console.log("errrrrr", err));
  }
}
