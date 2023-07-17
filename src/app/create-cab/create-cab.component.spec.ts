import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCabComponent } from './create-cab.component';

describe('CreateCabComponent', () => {
  let component: CreateCabComponent;
  let fixture: ComponentFixture<CreateCabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCabComponent]
    });
    fixture = TestBed.createComponent(CreateCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
