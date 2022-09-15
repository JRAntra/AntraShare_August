import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';


@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }
