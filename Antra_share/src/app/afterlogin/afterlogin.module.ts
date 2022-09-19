import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterloginRoutingModule } from './afterlogin-routing.module';
import { AfterloginPageComponent } from './afterlogin-page/afterlogin-page.component';

@NgModule({
  declarations: [AfterloginPageComponent],
  imports: [CommonModule, AfterloginRoutingModule],
})
export class AfterloginModule {}
