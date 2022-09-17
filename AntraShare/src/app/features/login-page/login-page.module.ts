import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterNowDirective } from './login/register-now.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterNowDirective
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginPageModule { }
