import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.css'],
})
export class InputStringComponent implements OnInit {
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

  createValidationArray(): any[] {
    const validatorsArray = [];
    const controlValidators = this.control.validators || [];

    for (const validator of controlValidators) {
      console.log(validator);

      switch (validator.validation) {
        case 'required':
          validatorsArray.push(Validators.required);
          break;
        case 'minlength':
          const minLength = validator.requiredLength;
          if (minLength !== undefined) {
            validatorsArray.push(Validators.minLength(minLength));
          }
          break;
        case 'maxlength':
          const maxLength = validator.requiredLength;
          if (maxLength !== undefined) {
            validatorsArray.push(Validators.maxLength(maxLength));
          }
          break;
        case 'pattern':
          console.log("pattern");
          const pattern = validator.pattern;
          if (pattern) {
            validatorsArray.push(Validators.pattern(pattern));
          }
          break;
        case 'email':
          validatorsArray.push(Validators.email);
          break;
        case 'min':
          const min = validator.value;
          if (min !== undefined) {
            validatorsArray.push(Validators.min(min));
          }
          break;
        case 'max':
          const max = validator.value;
          if (max !== undefined) {
            validatorsArray.push(Validators.max(max));
          }
          break;
        case 'custom':
          if (validator.customValidator) {
            validatorsArray.push(validator.customValidator);
          }
          break;
        // Add more cases for other validators if needed
      }
    }

    console.log("validatorsArray", validatorsArray);
    return validatorsArray;
  }

  getErrorMessage() {
    const formControl = this.form.get(this.control.name);
    if (formControl?.hasError('required')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'required')?.message || `${this.control.label} is required.`;
    }
    if (formControl?.hasError('minlength')) {
      return `${this.control.label} must be at least ${formControl.errors?.['minlength'].requiredLength} characters long.`;
    }
    if (formControl?.hasError('maxlength')) {
      return `${this.control.label} cannot be more than ${formControl.errors?.['maxlength'].requiredLength} characters long.`;
    }
    if (formControl?.hasError('pattern')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'pattern')?.message || `${this.control.label} is invalid.`;
    }
    if (formControl?.hasError('email')) {
      return `${this.control.label} must be a valid email address.`;
    }
    if (formControl?.hasError('min')) {
      return `${this.control.label} must be greater than or equal to ${formControl.errors?.['min'].min}.`;
    }
    if (formControl?.hasError('max')) {
      return `${this.control.label} must be less than or equal to ${formControl.errors?.['max'].max}.`;
    }
    if (formControl?.hasError('custom')) {
      return this.control.validators?.find((v: { validation: string; }) => v.validation === 'custom')?.message || `${this.control.label} is invalid.`;
    }
    return '';
  }
}
