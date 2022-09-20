import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared.routing-module';
import { NavigationCancel } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatListModule,
  
  ],
  exports: [
   NavbarComponent
  ]
})
export class SharedModule { }
