import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './newsfeed-routing.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';






@NgModule({
  declarations: [ 
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    
   
  ]
})
export class NewsFeedModule { }