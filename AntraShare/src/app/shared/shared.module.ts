import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AutohideDirective } from './directives/autohide.directive';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    AutohideDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    AutohideDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
