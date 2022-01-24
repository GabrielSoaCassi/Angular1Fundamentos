import { Photo } from './photos/Photo';
import { PhotoService } from "./photos/photo.service";
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {
    photoService
    .listFromUser("flavio")
    .subscribe(photos => this.photos = photos)
  }
}
