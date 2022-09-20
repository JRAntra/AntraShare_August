import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterPageComponent } from './register-page/register-page.component';

import { RegisterRoutingModule } from './register.routing-module';

@NgModule({
  declarations:[
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
    
  ],
  
})
export class RegisterModule { }