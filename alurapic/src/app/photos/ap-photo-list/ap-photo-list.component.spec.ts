import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPhotoListComponent } from './ap-photo-list.component';

describe('ApPhotoListComponent', () => {
  let component: ApPhotoListComponent;
  let fixture: ComponentFixture<ApPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
