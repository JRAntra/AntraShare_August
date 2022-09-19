import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterloginRoutingModule } from './afterlogin-routing.module';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

import { Hidein5Directive } from '../shared/directives/hidein5.directive';


@NgModule({
  declarations: [
    AfterloginComponent,
    Hidein5Directive,
  ],
  imports: [
    CommonModule,
    AfterloginRoutingModule
  ],
  exports: [
    AfterloginComponent,
  ]
})
export class AfterloginModule { }
