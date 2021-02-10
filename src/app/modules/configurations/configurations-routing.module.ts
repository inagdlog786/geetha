import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SftpConfigurationsComponent } from './sftp-configurations/sftp-configurations.component';

const routes: Routes = [
  { path: 'sftp', component: SftpConfigurationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
