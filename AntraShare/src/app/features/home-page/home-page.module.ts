import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { LikelistComponent } from './home/likelist/likelist.component';
import { StoryComponent } from './home/story/story.component';
import { PostformComponent } from './home/postform/postform.component';


@NgModule({
  declarations: [
    HomeComponent,
    LikelistComponent,
    StoryComponent,
    PostformComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
