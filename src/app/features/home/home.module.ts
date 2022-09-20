import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home.routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
   
    
  ],
})
export class HomeModule { }