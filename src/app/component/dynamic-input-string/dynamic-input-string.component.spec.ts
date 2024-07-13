import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputStringComponent } from './dynamic-input-string.component';

describe('DynamicInputStringComponent', () => {
  let component: DynamicInputStringComponent;
  let fixture: ComponentFixture<DynamicInputStringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInputStringComponent]
    });
    fixture = TestBed.createComponent(DynamicInputStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
