import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SftpConfigurationsComponent } from './configurations/sftp-configurations/sftp-configurations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SftpConfigurationsComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ModulesModule { }
