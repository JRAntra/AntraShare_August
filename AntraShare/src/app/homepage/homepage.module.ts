import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ListStoryComponent } from './list-story/list-story.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { StoryComponent } from './list-story/story/story.component';
import { HomepageComponent } from './homepage.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ListStoryComponent,
    PostStoryComponent,
    StoryComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
