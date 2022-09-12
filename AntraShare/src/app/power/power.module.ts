import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerRoutingModule } from './power-routing.module';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    SettingComponent
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
