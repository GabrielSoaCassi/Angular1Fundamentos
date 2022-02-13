import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPhotoFormComponent } from './ap-photo-form.component';

describe(ApPhotoFormComponent.name, () => {
  let component: ApPhotoFormComponent;
  let fixture: ComponentFixture<ApPhotoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPhotoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
