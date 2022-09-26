import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
// materiel
import { MaterialModule } from '../material.module';
// core

// shared
import { AutohideDirective } from '../shared/directive/autohide.directive';

@NgModule({
  declarations: [
    ProfileComponent,
    AutohideDirective,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
