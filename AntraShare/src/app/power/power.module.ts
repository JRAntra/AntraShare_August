import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerRoutingModule } from './power-routing.module';
import { SettingComponent } from './setting/setting.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    SettingComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    PowerRoutingModule
  ],
  exports:[
    SettingComponent,
    AdminComponent
  ]
})
export class PowerModule { }
