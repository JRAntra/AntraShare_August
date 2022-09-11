import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserDetailedInfoPanelComponent } from './user-detailed-info-panel/user-detailed-info-panel.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListsComponent,
    UserDetailedInfoPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
