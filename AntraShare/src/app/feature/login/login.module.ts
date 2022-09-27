import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from '../../shared/directive/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
 
    
  ],
  exports: [
    LoginComponent,
    
  ]
})
export class LoginModule { }
