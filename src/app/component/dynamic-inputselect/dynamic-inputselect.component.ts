import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-inputselect',
  templateUrl: './dynamic-inputselect.component.html',
  styleUrls: ['./dynamic-inputselect.component.css']
})
export class DynamicInputselectComponent {
  @Input() label: string = '';
  @Input() formControl: FormControl = new FormControl();
}
