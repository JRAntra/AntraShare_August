import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home.routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
   
    
  ],
})
export class HomeModule { }