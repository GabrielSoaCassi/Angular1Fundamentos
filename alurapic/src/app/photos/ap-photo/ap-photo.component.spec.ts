import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPhotoComponent } from './ap-photo.component';

describe('ApPhotoComponent', () => {
  let component: ApPhotoComponent;
  let fixture: ComponentFixture<ApPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
