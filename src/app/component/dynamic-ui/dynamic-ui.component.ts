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

  // this is the function for the addList

  addList(control:any,name:string,form:FormGroup){
    console.log("this is the controle",control);
    console.log("this is the name",name);
    console.log("this is the list",form.value.name);
    const newGroup = this.fb.group({
      name: [''],
      rollno: [''],
      date: ['']
    });
    const formArray = this.form.get(name) as FormArray;
    formArray.push(newGroup);

    console.log("new", this.form.value);

  }
}
