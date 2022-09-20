import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AutohideDirective } from './directives/autohide.directive';


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
    NavbarComponent,
    AutohideDirective
  ]
})
export class SharedModule { }
