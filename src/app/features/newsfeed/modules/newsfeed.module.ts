import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsFeedRoutingModule } from './newsfeed-routing.module';

import { NewsFeedComponent } from '../newsfeed-page/news-feed.component';
import { LikelistComponent } from '../newsfeed-page/likelist/likelist.component';
import { StorylistComponent} from '../newsfeed-page/storylist/storylist.component';
import { PostFormComponent } from '../newsfeed-page/post-form/post-form.component';
import { StoryComponent } from '../newsfeed-page/storylist/story/story.component';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [ 
    NewsFeedComponent,
    LikelistComponent,
    StorylistComponent,
    PostFormComponent,
    StoryComponent,
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    SharedModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    
   
  ]
})
export class NewsFeedModule { }