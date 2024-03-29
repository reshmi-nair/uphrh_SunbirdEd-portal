import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModalModule } from 'ng2-semantic-ui-v9';

import { SharedModule } from '@sunbird/shared';
import { TelemetryModule } from '@sunbird/telemetry';

import { LocationSelectionComponent } from './components';
import { CommonFormElementsModule } from '@project-sunbird/common-form-elements-v9';

@NgModule({
  declarations: [
    LocationSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModalModule,
    SharedModule,
    TelemetryModule,
    CommonFormElementsModule
  ],
  exports: [
    LocationSelectionComponent
  ]
})
export class LocationModule { }
