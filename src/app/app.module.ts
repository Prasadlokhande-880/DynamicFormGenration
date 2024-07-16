import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynimicFormControlComponent } from './component/dynimic-form-control/dynimic-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicUiComponent } from './component/dynamic-ui/dynamic-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    DynimicFormControlComponent,
    DynamicUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
