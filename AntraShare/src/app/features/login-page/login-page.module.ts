import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginPageModule { }
