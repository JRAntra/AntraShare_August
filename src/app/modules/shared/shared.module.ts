import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { temporaryShowDirective } from './directives/temporaryShow.directive';



@NgModule({
  declarations: [
    temporaryShowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    temporaryShowDirective
  ]
})
export class SharedModule { }
