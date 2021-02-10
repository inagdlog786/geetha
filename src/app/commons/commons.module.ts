import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';



@NgModule({
  declarations: [HeaderComponent, PageFooterComponent],
  imports: [
    CommonModule
  ]
})
export class CommonsModule { }
