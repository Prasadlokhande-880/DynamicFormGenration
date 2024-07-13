import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynimicFormControlComponent } from './component/dynimic-form-control/dynimic-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicUiComponent } from './component/dynamic-ui/dynamic-ui.component';
import { DynamicInputStringComponent } from './component/dynamic-input-string/dynamic-input-string.component';
import { DynamicInputBooleanComponent } from './component/dynamic-input-boolean/dynamic-input-boolean.component';
import { DynamicInputCounterComponent } from './component/dynamic-input-counter/dynamic-input-counter.component';
import { DynamicInputselectComponent } from './component/dynamic-inputselect/dynamic-inputselect.component';

@NgModule({
  declarations: [
    AppComponent,
    DynimicFormControlComponent,
    DynamicUiComponent,
    DynamicInputStringComponent,
    DynamicInputBooleanComponent,
    DynamicInputCounterComponent,
    DynamicInputselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
