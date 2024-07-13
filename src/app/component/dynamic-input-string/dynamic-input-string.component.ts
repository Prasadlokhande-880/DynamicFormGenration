import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-input-string',
  templateUrl: './dynamic-input-string.component.html',
  styleUrls: ['./dynamic-input-string.component.css']
})
export class DynamicInputStringComponent {
  @Input() label: string = '';
  @Input() formControlName: FormControl = new FormControl();
}
