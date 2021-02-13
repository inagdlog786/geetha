import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DistributionConfigurationsComponent } from './distribution-configurations/distribution-configurations.component';


@NgModule({
  declarations: [DistributionConfigurationsComponent],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule
  ]
})
export class ConfigurationsModule { }
