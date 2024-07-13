import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-input-boolean',
  templateUrl: './dynamic-input-boolean.component.html',
  styleUrls: ['./dynamic-input-boolean.component.css']
})
export class DynamicInputBooleanComponent {
  @Input() label: string = '';
  @Input() formControlName: FormControl = new FormControl();
}
