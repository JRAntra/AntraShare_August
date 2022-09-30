import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ListStoryComponent } from './components/list-story/list-story.component';
import { PostStoryComponent } from './components/post-story/post-story.component';
import { StoryComponent } from './components/story/story.component';
import { HomepageComponent } from './homepage.component';
import { LikeListComponent } from './components/like-list/like-list.component';

import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { ListCommentComponent } from './components/story/components/list-comment/list-comment/list-comment.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ListStoryComponent,
    PostStoryComponent,
    StoryComponent,
    LikeListComponent,
    TruncatePipe,
    ListCommentComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
