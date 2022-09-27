import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ListStoryComponent } from './list-story/list-story.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { StoryComponent } from './story/story.component';
import { HomepageComponent } from './homepage.component';
import { LikeListComponent } from './like-list/like-list.component';

import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';


@NgModule({
  declarations: [
    HomepageComponent,
    ListStoryComponent,
    PostStoryComponent,
    StoryComponent,
    LikeListComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
