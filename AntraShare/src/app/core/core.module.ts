import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RegisterPageComponent,
    LoginPageComponent,
  ]
})
export class CoreModule { }
