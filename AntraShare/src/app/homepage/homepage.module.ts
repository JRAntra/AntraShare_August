import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ListStoryComponent } from './list-story/list-story.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    ListStoryComponent,
    PostStoryComponent,
    StoryComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
