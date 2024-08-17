import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() control!: { name: string; label: string; placeholder?: string; min?: number; max?: number; validators?: any };
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
    const validatorsArray = [Validators.required]; // Default required validator
    const controlValidators = this.control.validators || [];

    if (this.control.min !== undefined) {
      validatorsArray.push(Validators.min(this.control.min));
    }
    if (this.control.max !== undefined) {
      validatorsArray.push(Validators.max(this.control.max));
    }

    for (const validator of controlValidators) {
      switch (validator.validation) {
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
      return `${this.control.label} is required.`;
    }
    if (formControl?.hasError('min')) {
      return `${this.control.label} must be at least ${this.control.min}.`;
    }
    if (formControl?.hasError('max')) {
      return `${this.control.label} cannot be more than ${this.control.max}.`;
    }
    if (formControl?.hasError('custom')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'custom')?.message || `${this.control.label} is invalid.`;
    }
    return '';
  }
}