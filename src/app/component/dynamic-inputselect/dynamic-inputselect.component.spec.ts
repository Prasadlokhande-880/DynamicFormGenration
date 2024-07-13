import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputselectComponent } from './dynamic-inputselect.component';

describe('DynamicInputselectComponent', () => {
  let component: DynamicInputselectComponent;
  let fixture: ComponentFixture<DynamicInputselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInputselectComponent]
    });
    fixture = TestBed.createComponent(DynamicInputselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
