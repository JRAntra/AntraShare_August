import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home.routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavModule } from '../navbar/nav.module';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
    
  ]
})
export class HomeModule { }