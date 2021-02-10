import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { ConfigurationsRoutingModule } from './modules/configurations/configurations-routing.module';
import { from } from 'rxjs';
import { HeaderComponent } from './commons/header/header.component';
import { ElementsComponent } from './bootstrap/elements/elements.component';


// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HeaderComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    ConfigurationsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
