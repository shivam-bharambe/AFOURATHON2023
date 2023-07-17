import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCabComponent } from './update-cab.component';

describe('UpdateCabComponent', () => {
  let component: UpdateCabComponent;
  let fixture: ComponentFixture<UpdateCabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCabComponent]
    });
    fixture = TestBed.createComponent(UpdateCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
