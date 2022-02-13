import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ApPhotoComponent } from "./ap-photo/ap-photo.component";
import { ApPhotoListComponent } from './ap-photo-list/ap-photo-list.component';
import { ApPhotoFormComponent } from './ap-photo-form/ap-photo-form.component';
import { PhotosComponent } from './ap-photo-list/photos/photos.component';
import {FilterByDescription } from './ap-photo-list/filter-by-description.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ApPhotoComponent, ApPhotoListComponent, ApPhotoFormComponent, PhotosComponent, FilterByDescription],
  exports: [ApPhotoComponent,ApPhotoListComponent]
})
export class PhotosModule { }
