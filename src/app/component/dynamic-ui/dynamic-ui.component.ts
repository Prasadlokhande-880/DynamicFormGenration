import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
  animations: [
    trigger('slideToggle', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class DynamicUiComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlsData: any;
  isContentVisible = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  getFormGroup(form: FormGroup, name: string): FormGroup {
    return form.get(name) as FormGroup;
  }

  getFormArray(form: FormGroup, name: string): FormArray {
    return form.get(name) as FormArray;
  }

  getFormArrayAtIndex(name: string, index: number, form: FormGroup): FormGroup {
    return this.getFormArray(form, name).at(index) as FormGroup;
  }

  removeGroup(index: number, form: FormGroup, name: string): void {
    const formArray = this.getFormArray(form, name);
    formArray.removeAt(index);
  }

  addList(control: any, name: string, form: FormGroup): void {
    const newGroup = this.fb.group({});
    const formArray = this.getFormArray(form, name);
    this.buildForm(control, newGroup);
    formArray.push(newGroup);
  }

  buildForm(controls: any[], formGroup: FormGroup): void {
    controls.forEach(control => {
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
      validators.forEach(validator => {
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
