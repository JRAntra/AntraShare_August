import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './newsfeed-routing.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  declarations: [ 
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    SharedModule
    
   
  ]
})
export class NewsFeedModule { }