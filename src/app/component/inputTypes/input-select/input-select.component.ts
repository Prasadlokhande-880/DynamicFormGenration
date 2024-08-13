import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  @Input() control!: { name: string; label: string; options: { value: string; label: string }[]; validators?: any };
  @Input() form!: FormGroup;

  ngOnInit() {
    const formControl = this.form.get(this.control.name);
    if (formControl) {
      // Adding the dynamic validation
      const validators = this.createValidationArray();
      formControl.setValidators(validators);
      formControl.updateValueAndValidity();
    }
  }

  createValidationArray(): any[] {
    const validatorsArray = [];
    const controlValidators = this.control.validators || [];

    for (const validator of controlValidators) {
      switch (validator.validation) {
        case 'required':
          validatorsArray.push(Validators.required);
          break;
        case 'custom':
          if (validator.customValidator) {
            validatorsArray.push(validator.customValidator);
          }
          break;
        // Add more cases for other validators if needed
      }
    }

    return validatorsArray;
  }

  getErrorMessage() {
    const formControl = this.form.get(this.control.name);
    if (formControl?.hasError('required')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'required')?.message || `${this.control.label} is required.`;
    }
    if (formControl?.hasError('custom')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'custom')?.message || `${this.control.label} is invalid.`;
    }
    return '';
  }
}
