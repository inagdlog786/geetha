import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DistributionConfigurationsComponent } from './distribution-configurations/distribution-configurations.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    DistributionConfigurationsComponent, TabLayoutComponent,
    SftpConfigurationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot() ,
    ConfigurationsRoutingModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    TabsModule.forRoot()
  ]
})
export class ConfigurationsModule { }
