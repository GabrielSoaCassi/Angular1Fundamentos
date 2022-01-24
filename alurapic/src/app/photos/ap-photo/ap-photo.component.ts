import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './ap-photo.component.html',
  styleUrls: ['./ap-photo.component.css']
})
export class ApPhotoComponent {
@Input() description :string = '';
@Input() url :string = '';

}
