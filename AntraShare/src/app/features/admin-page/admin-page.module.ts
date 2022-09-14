import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule
  ]
})
export class AdminPageModule { }
