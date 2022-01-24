import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApPhotoComponent } from "./ap-photo/ap-photo.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ApPhotoComponent],
  exports:[ApPhotoComponent]
})
export class PhotosModule {}
