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
  }

  take():void{
    console.log("this submit",this.form.value);
  }

  getFormGroup(form:FormGroup,name:string):FormGroup{
    return form.get(name) as FormGroup;
  }
}
