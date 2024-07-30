import { Component, OnInit, OnDestroy } from '@angular/core';
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
        validators: ['required', 'pattern:^https?://.+'],
      },
      {


        type: 'Boolean',
        label: 'Enable Logging',
        name: 'enableLogging',
        value: true,
        validators: ['required'],
      },
      {
        type: 'String',
        label: 'Log Directory',
        name: 'logDirectory',
        value: '/var/logs/bookstore',
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
            value: '/etc/bookstore/advanced-config.json',
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
            value: '/var/logs/bookstore/debug',
            validators: [],
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
                    value: '/etc/bookstore/plugins/inventory.json',
                    validators: [],
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
                            value: '/etc/bookstore/plugins/inventory.json',
                            validators: [],
                          },
                          {
                            type: 'String',
                            label: 'Plugin Name',
                            name: 'pluginName',
                            value: 'InventoryPlugin',
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
                            value: '/etc/bookstore/plugins/inventory.json',
                            validators: [],
                          },
                          {
                            type: 'String',
                            label: 'Plugin Name',
                            name: 'pluginName',
                            value: 'InventoryPlugin',
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
                            value: '/etc/bookstore/plugins/inventory.json',
                            validators: [],
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