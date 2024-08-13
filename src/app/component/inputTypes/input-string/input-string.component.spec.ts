import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStringComponent } from './input-string.component';

describe('InputStringComponent', () => {
  let component: InputStringComponent;
  let fixture: ComponentFixture<InputStringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputStringComponent]
    });
    fixture = TestBed.createComponent(InputStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
