import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileComponent } from './profiletab/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ProfiletabComponent } from './profiletab/profiletab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { EditProfileComponent } from './profiletab/edit-profile/edit-profile.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfiletabComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ProfilePageModule { }
