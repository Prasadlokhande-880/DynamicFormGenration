import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'input-boolen',
  templateUrl: './input-boolen.component.html',
  styleUrls: ['./input-boolen.component.css']
})
export class InputBoolenComponent implements OnInit {
  @Input() control!: { name: string; label: string; placeholder?: string; validators?: any };
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

  createValidationArray(): ValidatorFn[] {
    const validatorsArray: ValidatorFn[] = [];
    const controlValidators = this.control.validators || [];

    for (const validator of controlValidators) {
      switch (validator.validation) {
        case 'required':
          validatorsArray.push(Validators.requiredTrue); // Specific to boolean inputs like checkboxes
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
