import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css']
})
export class DynamicUiComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('form', this.form.value);
    console.log('formControlsData', this.formControlsData);
  }

  getFormArray(controlName: string): FormArray {
    return this.form.get(controlName) as FormArray;
  }

  getFormGroup(controlName: string, index: number): FormGroup {
    return this.getFormArray(controlName).at(index) as FormGroup;
  }

  getFormGroupByName(controlName: string): FormGroup {
    return this.form.get(controlName) as FormGroup;
  }
  
}
