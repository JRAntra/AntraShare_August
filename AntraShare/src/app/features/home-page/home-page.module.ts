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
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ListDialogComponent } from './home/likelist/list-dialog/list-dialog.component';
import { CommentListComponent } from './home/story-list/story/comment-list/comment-list.component';
@NgModule({
  declarations: [
    HomeComponent,
    LikelistComponent,
    StoryListComponent,
    PostformComponent,
    StoryComponent,
    ListDialogComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class HomepageModule { }
