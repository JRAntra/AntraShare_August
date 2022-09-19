import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterloginRoutingModule } from './afterlogin-routing.module';
import { AfterloginComponent } from './afterlogin.component';
import { AfterloginPageComponent } from './afterlogin-page/afterlogin-page.component';


@NgModule({
  declarations: [
    AfterloginComponent,
    AfterloginPageComponent
  ],
  imports: [
    CommonModule,
    AfterloginRoutingModule
  ]
})
export class AfterloginModule { }
