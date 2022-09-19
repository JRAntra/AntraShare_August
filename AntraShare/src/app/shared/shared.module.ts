import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoHideDirective } from './directives/auto-hide.directive';



@NgModule({
  declarations: [
    AutoHideDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
