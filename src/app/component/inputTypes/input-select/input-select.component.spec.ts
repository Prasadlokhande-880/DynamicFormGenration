import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectComponent } from './input-select.component';

describe('InputSelectComponent', () => {
  let component: InputSelectComponent;
  let fixture: ComponentFixture<InputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectComponent]
    });
    fixture = TestBed.createComponent(InputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
