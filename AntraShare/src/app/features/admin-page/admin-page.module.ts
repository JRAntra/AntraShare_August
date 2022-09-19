import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RemoveAfterDirective } from './remove-after.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StorylistComponent } from './admin/storylist/storylist.component';
import { StoryComponent } from './admin/storylist/story/story.component';
import { MatCardModule } from '@angular/material/card';

// import { ProfileComponent } from './profile/profile.component';
// import { ProfileComponent } from '../profile-page/profile/profile.component';
// import { ProfilelistComponent } from './profilelist/profilelist.component';



@NgModule({
  declarations: [
    AdminComponent,
    RemoveAfterDirective,
    StorylistComponent,
    StoryComponent,
    // ProfileComponent,
    // ProfilelistComponent,
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AdminPageModule { }
