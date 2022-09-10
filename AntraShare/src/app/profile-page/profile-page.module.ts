import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule { }
