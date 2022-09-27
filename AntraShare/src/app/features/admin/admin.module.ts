import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { UserDetailedInfoPanelComponent } from './components/user-detailed-info-panel/user-detailed-info-panel.component';

// material
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    AdminComponent,
    UserListsComponent,
    UserDetailedInfoPanelComponent,
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
