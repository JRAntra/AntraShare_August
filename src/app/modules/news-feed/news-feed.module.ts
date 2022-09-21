import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { MaterialModule } from 'src/app/material.module';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    NewsFeedComponent,
    WarningComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }
