import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CustomErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
