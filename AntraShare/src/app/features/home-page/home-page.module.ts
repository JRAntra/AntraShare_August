import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { LikelistComponent } from './home/likelist/likelist.component';
import { StoryListComponent } from './home/story-list/story-list.component';
import { PostformComponent } from './home/postform/postform.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { StoryComponent } from './home/story-list/story/story.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    LikelistComponent,
    StoryListComponent,
    PostformComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ]
})
export class HomepageModule { }
