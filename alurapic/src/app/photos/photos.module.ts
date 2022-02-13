import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ApPhotoComponent } from "./ap-photo/ap-photo.component";
import { ApPhotoListComponent } from './ap-photo-list/ap-photo-list.component';
import { ApPhotoFormComponent } from './ap-photo-form/ap-photo-form.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ApPhotoComponent, ApPhotoListComponent, ApPhotoFormComponent],
  exports: [ApPhotoComponent,ApPhotoListComponent]
})
export class PhotosModule { }
