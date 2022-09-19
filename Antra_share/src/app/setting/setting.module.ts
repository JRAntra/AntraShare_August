import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';


@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingModule { }
