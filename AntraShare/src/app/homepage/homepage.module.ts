import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AppModule } from '../app.module';
import { StoryComponent } from './newsfeed/story/story.component';
import { PostformComponent } from './newsfeed/postform/postform.component';
import { LikelistComponent } from './newsfeed/likelist/likelist.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NewsfeedComponent,
    StoryComponent,
    PostformComponent,
    LikelistComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports:[
    NavbarComponent,
    NewsfeedComponent
  ]
})
export class HomepageModule { }
