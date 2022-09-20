import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsRoutingModule } from './settings.routing-module';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations:[
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule


  ],
  
})
export class SettingsModule { }