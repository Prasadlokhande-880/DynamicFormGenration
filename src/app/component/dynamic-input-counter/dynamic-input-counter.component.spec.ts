import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputCounterComponent } from './dynamic-input-counter.component';

describe('DynamicInputCounterComponent', () => {
  let component: DynamicInputCounterComponent;
  let fixture: ComponentFixture<DynamicInputCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInputCounterComponent]
    });
    fixture = TestBed.createComponent(DynamicInputCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
