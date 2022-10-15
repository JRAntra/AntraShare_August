import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterRoutingModule } from './register-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule, 
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RegisterPageComponent],
})
export class RegisterModule {}
