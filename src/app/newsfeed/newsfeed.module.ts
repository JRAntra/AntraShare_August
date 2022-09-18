import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './newsfeed-routing.module';
import { NavModule } from '../navbar/nav.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsFeedRoutingModule, 
    NavModule,
  ]
})
export class NewsFeedModule { }