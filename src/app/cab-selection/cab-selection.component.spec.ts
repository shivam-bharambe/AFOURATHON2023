import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabSelectionComponent } from './cab-selection.component';

describe('CabSelectionComponent', () => {
  let component: CabSelectionComponent;
  let fixture: ComponentFixture<CabSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabSelectionComponent]
    });
    fixture = TestBed.createComponent(CabSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
