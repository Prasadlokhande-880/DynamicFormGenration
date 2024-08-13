import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoolenComponent } from './input-boolen.component';

describe('InputBoolenComponent', () => {
  let component: InputBoolenComponent;
  let fixture: ComponentFixture<InputBoolenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputBoolenComponent]
    });
    fixture = TestBed.createComponent(InputBoolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
