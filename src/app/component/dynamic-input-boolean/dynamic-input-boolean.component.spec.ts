import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputBooleanComponent } from './dynamic-input-boolean.component';

describe('DynamicInputBooleanComponent', () => {
  let component: DynamicInputBooleanComponent;
  let fixture: ComponentFixture<DynamicInputBooleanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInputBooleanComponent]
    });
    fixture = TestBed.createComponent(DynamicInputBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
