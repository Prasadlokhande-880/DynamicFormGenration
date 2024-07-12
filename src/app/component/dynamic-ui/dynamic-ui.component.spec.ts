import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUiComponent } from './dynamic-ui.component';

describe('DynamicUiComponent', () => {
  let component: DynamicUiComponent;
  let fixture: ComponentFixture<DynamicUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicUiComponent]
    });
    fixture = TestBed.createComponent(DynamicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
