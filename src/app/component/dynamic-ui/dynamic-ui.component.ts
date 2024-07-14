import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
})
export class DynamicUiComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;
  checkArrayStatue: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  take(): void {
    console.log('Submitted form data:', this.form.value);
  }

  getFormGroup(form: FormGroup, name: string): FormGroup {
    return form.get(name) as FormGroup;
  }

  checkArray(control: any, form: FormGroup, name: string): void {
    const formArray = form.get(name) as FormArray;
    this.checkArrayStatue = formArray && formArray.length > 0;
  }

  getFormArray(form: FormGroup, name: string): FormArray {
    return form.get(name) as FormArray;
  }

  getFormGroupArray(form:any,i:number):string{
    const newGroup = this.fb.group({
      name: ""
    });
    console.log("getFormGroup", form.value,i);
    return "prasad";
  }

  addList(control: any, name: string, form: FormGroup): void {
    const newGroup = this.fb.group({});
    const formArray = form.get(name) as FormArray;
    this.buildForm(control, newGroup);
    formArray.push(newGroup);
    this.checkArray(control, form, name);
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
