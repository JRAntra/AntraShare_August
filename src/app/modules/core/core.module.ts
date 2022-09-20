import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    CustomErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
