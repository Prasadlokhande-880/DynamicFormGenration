import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-input-counter',
  templateUrl: './dynamic-input-counter.component.html',
  styleUrls: ['./dynamic-input-counter.component.css']
})
export class DynamicInputCounterComponent {
  @Input() label: string = '';
  @Input() formControlName: FormControl = new FormControl();
}
