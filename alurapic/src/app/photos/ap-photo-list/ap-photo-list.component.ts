import { Component, OnInit } from '@angular/core';
import { Photo } from '../Photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-ap-photo-list',
  templateUrl: './ap-photo-list.component.html',
  styleUrls: ['./ap-photo-list.component.css']
})
export class ApPhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {
  }
  ngOnInit(): void {
    this.photoService
      .listFromUser("flavio")
      .subscribe(photos => this.photos = photos)
  }
}
