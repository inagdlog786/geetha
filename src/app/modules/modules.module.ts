import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SftpConfigurationsComponent } from './configurations/sftp-configurations/sftp-configurations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [SftpConfigurationsComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule
  ]
})
export class ModulesModule { }
