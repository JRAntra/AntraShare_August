import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RegisterPageComponent,
  ]
})
export class CoreModule { }
