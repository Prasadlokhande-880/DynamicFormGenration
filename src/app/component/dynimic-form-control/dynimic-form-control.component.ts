import { Component, OnInit } from '@angular/core';
import {
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
export class DynimicFormControlComponent implements OnInit {
  userForm!: FormGroup;

  formJson = {
    type: 'group',
    label: 'Web Application Configuration',
    name: 'WebAppConfig',
    controls: [
      {
        type: 'Boolean',
        label: 'Activate Service',
        name: 'activateService',
        value: true,
        validators: [],
      },
      {
        type: 'String',
        label: 'Service Endpoint URL',
        name: 'serviceEndpoint',
        value: '',
        validators: [
          { type: 'required', message: 'Log Directory is required' },
          {
            type: 'minLength',
            length: 3,
            message: 'Plugin Name must be at least 3 characters long',
          },
          {
            type: 'maxLength',
            length: 50,
            message: 'Plugin Name cannot exceed 50 characters',
          },
        ],
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
        value: '/var/logs/bookstore',
        validators: [
          { type: 'required', message: 'Log Directory is required' },
          {
            type: 'pattern',
            pattern: '^/var/logs/.+',
            message: 'Invalid directory path',
          },
        ],
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
            value: '/etc/bookstore/advanced-config.json',
            validators: [
              {
                type: 'required',
                message: 'Advanced Configuration File Path is required',
              },
              {
                type: 'pattern',
                pattern: '^/etc/bookstore/.+',
                message: 'Invalid file path format',
              },
            ],
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
            value: '/var/logs/bookstore/debug',
            validators: [
              {
                type: 'pattern',
                pattern: '^/var/logs/.+',
                message: 'Invalid directory path',
              },
            ],
          },
          {
            type: 'list',
            label: 'Plugins',
            name: 'plugins',
            controls: [
              {
                type: 'group',
                label: 'Plugin Settings',
                name: 'pluginSettings',
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
                    value: 'InventoryPlugin',
                    validators: [
                      { type: 'required', message: 'Plugin Name is required' },
                      {
                        type: 'minLength',
                        length: 3,
                        message:
                          'Plugin Name must be at least 3 characters long',
                      },
                      {
                        type: 'maxLength',
                        length: 50,
                        message: 'Plugin Name cannot exceed 50 characters',
                      },
                    ],
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
                    value: '/etc/bookstore/plugins/inventory.json',
                    validators: [
                      {
                        type: 'pattern',
                        pattern: '^/etc/bookstore/plugins/.+',
                        message: 'Invalid file path format',
                      },
                    ],
                  },
                ],
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
  }

  onSubmit() {
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
        const { validators } = this.mapValidators(control.validators);
        const formControl = new FormControl(control.value || '', validators);
        formGroup.addControl(control.name, formControl);
      }
    });
  }
  mapValidators(validators: any[]): { validators: any[], messages: any[] } {
    const formValidators: any[] = [];
    const messages: any[] = [];
    if (validators) {
      validators.forEach((validator) => {
        switch (validator.type) {
          case 'required':
            formValidators.push(Validators.required);
            messages.push(validator.message);
            break;
          case 'pattern':
            formValidators.push(Validators.pattern(validator.pattern));
            messages.push(validator.message);
            break;
          case 'minLength':
            formValidators.push(Validators.minLength(validator.length));
            messages.push(validator.message || `Minimum length is ${validator.length}`);
            break;
          case 'maxLength':
            formValidators.push(Validators.maxLength(validator.length));
            messages.push(validator.message || `Maximum length is ${validator.length}`);
            break;
          case 'custom':
            // Assuming the custom validator is a function
            formValidators.push(validator.validator);
            messages.push(validator.message);
            break;
        }
      });
    }
    return { validators: formValidators, messages: messages };
  }

  markAllAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((controlName) => {
      const control = formGroup.get(controlName);
      control?.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
}