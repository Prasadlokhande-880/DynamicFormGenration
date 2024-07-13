import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
})
export class DynamicUiComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  take(): void {
    console.log('this submit', this.form.value);
  }

  getFormGroup(form: FormGroup, name: string): FormGroup {
    return form.get(name) as FormGroup;
  }

  addList(control: any, name: string, form: FormGroup): void {
    const newGroup = this.fb.group({});
    const formArray = form.get(name) as FormArray;
    this.buildForm(control, newGroup);
    formArray.push(newGroup);
    console.log('new group will be created',this.form.value);
  }

  buildForm(controls: any[], formGroup: FormGroup): void {
    controls.forEach((control) => {
      if (control.type === 'group') {
        const subgroup = this.fb.group({});
        this.buildForm(control.controls, subgroup);
        formGroup.addControl(control.name, subgroup);
      } else if (control.type === 'list') {
        const formArray = this.fb.array([]);
        formGroup.addControl(control.name, formArray);
      } else {
        const validators = this.mapValidators(control.validators);
        const formControl = new FormControl(control.value || '', validators);
        formGroup.addControl(control.name, formControl);
      }
    });
  }

  mapValidators(validators: string[]): any[] {
    const formValidators: any[] = [];
    if (validators) {
      validators.forEach((validator) => {
        if (validator === 'required') {
          formValidators.push(Validators.required);
        } else if (validator === 'email') {
          formValidators.push(Validators.email);
        } else if (validator.startsWith('pattern:')) {
          const pattern = validator.split(':')[1];
          formValidators.push(Validators.pattern(pattern));
        }
      });
    }
    return formValidators;
  }
}
