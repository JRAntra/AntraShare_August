import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './home/home.component';
import { LikelistComponent } from './home/likelist/likelist.component';
import { StoryComponent } from './home/story/story.component';
import { PostformComponent } from './home/postform/postform.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LikelistComponent,
    StoryComponent,
    PostformComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
