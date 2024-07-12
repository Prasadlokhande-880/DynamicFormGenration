import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css']
})
export class DynamicUiComponent {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.formControlsData.controls)
  }
}
