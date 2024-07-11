import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynimicFormControlComponent } from './dynimic-form-control.component';

describe('DynimicFormControlComponent', () => {
  let component: DynimicFormControlComponent;
  let fixture: ComponentFixture<DynimicFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynimicFormControlComponent]
    });
    fixture = TestBed.createComponent(DynimicFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
