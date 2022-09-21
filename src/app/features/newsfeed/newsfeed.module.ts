import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFeedRoutingModule } from './newsfeed-routing.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ 
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    
   
  ],
  exports:[
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }