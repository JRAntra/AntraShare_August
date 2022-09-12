import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [ProfilePageComponent, SettingsPageComponent],
  imports: [CommonModule, CoreRoutingModule],

  exports: [ProfilePageComponent, SettingsPageComponent],
})
export class CoreModule {}
