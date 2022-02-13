import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Photo } from "../Photo";
import { PhotoService } from "../photo.service";

@Component({
  selector: "ap-photo-list",
  templateUrl: "./ap-photo-list.component.html",
  styleUrls: ["./ap-photo-list.component.css"],
})
export class ApPhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data["photos"];
  }
}
