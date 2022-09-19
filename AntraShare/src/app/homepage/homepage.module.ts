import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { ListStoryComponent } from './components/list-story/list-story.component';
import { PostStoryComponent } from './components/post-story/post-story.component';
import { StoryComponent } from './components/list-story/story/story.component';
import { HomepageComponent } from './homepage.component';

import { AutoHideDirective } from '../shared/directives/auto-hide.directive';


@NgModule({
  declarations: [
    HomepageComponent,
    ListStoryComponent,
    PostStoryComponent,
    StoryComponent,

    AutoHideDirective,
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
