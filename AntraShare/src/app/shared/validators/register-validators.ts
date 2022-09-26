import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AutohideDirective } from './directives/autohide.directive';
import { LimitCharPipe } from './pipes/limit-char.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    AutohideDirective,
    LimitCharPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    AutohideDirective,
    LimitCharPipe
  ]
})
export class SharedModule { }
