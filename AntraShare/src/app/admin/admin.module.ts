import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserDetailedInfoPanelComponent } from './user-detailed-info-panel/user-detailed-info-panel.component';
import { UserTagComponent } from './user-lists/user-tag.component';

// material
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    AdminComponent,
    UserListsComponent,
    UserDetailedInfoPanelComponent,
    UserTagComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
