import { Component, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'dynimic-form-control',
  templateUrl: './dynimic-form-control.component.html',
  styleUrls: ['./dynimic-form-control.component.css'],
})
export class DynimicFormControlComponent {
  userForm!: FormGroup;
  firstInput: string = '';

  formJson = {
    type: 'group',
    label: 'Configuration',
    name: 'Configuration',
    controls: [
      {
        type: 'Boolean',
        label: 'Activate Service',
        name: 'activateService',
        value: false,
        validators: [],
      },
      {
        type: 'String',
        label: 'Service Endpoint URL',
        name: 'serviceEndpoint',
        value: 'http://example.com/api',
        validators: ['required', 'pattern:^https?://.+'],
      },
      {
        type: 'Boolean',
        label: 'Enable Logging',
        name: 'enableLogging',
        value: true,
        validators: [],
      },
      {
        type: 'String',
        label: 'Log Directory',
        name: 'logDirectory',
        value: '/var/logs',
        validators: [],
      },
      {
        type: 'group',
        label: 'Advanced Settings',
        name: 'AdvancedSettings',
        controls: [
          {
            type: 'Boolean',
            label: 'Enable Advanced Mode',
            name: 'enableAdvancedMode',
            value: false,
            validators: [],
          },
          {
            type: 'String',
            label: 'Advanced Configuration File Path',
            name: 'advancedConfigPath',
            value: '/etc/advanced/config.json',
            validators: ['required'],
          },
          {
            type: 'Boolean',
            label: 'Enable Debugging',
            name: 'enableDebugging',
            value: true,
            validators: [],
          },
          {
            type: 'String',
            label: 'Debug Log Directory',
            name: 'debugLogDirectory',
            value: '/var/logs/debug',
            validators: [],
          },
          {
            type: 'list',
            label: 'Plugins',
            name: 'plugins',
            controls: [
              {
                type: 'Boolean',
                label: 'Enable Plugin',
                name: 'enablePlugin',
                value: true,
                validators: [],
              },
              {
                type: 'String',
                label: 'Plugin Name',
                name: 'pluginName',
                value: 'DefaultPlugin',
                validators: ['required'],
              },
              {
                type: 'Boolean',
                label: 'Plugin Debug Mode',
                name: 'pluginDebugMode',
                value: false,
                validators: [],
              },
              {
                type: 'String',
                label: 'Plugin Configuration File',
                name: 'pluginConfigFile',
                value: '/etc/plugins/default.json',
                validators: [],
              },
            ],
          },
        ],
      },
    ],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
    this.buildForm(this.formJson.controls, this.userForm);
    console.log(this.userForm.value);
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