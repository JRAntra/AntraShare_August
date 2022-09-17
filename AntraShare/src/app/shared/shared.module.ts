import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AutohideDirective } from './autohide.directive';


@NgModule({
  declarations: [
    NavbarComponent,
    AutohideDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
