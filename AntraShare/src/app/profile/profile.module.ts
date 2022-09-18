import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
// materiel
import { MaterialModule } from '../material.module';
// core

// shared
import { AutohideDirective } from '../shared/autohide.directive';

@NgModule({
  declarations: [
    ProfileComponent,
    AutohideDirective,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
