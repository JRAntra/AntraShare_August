import { Component } from '@angular/core';
import { NewsFeedStory } from './shared/models/newsfeed';
import { NewsfeedService } from './shared/services/newsfeed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Antra_share';

  userInfo = { name: 'tiger', admin: true };

  ngOnIt(): void {
    const news: NewsFeedStory = {
      userInfo: this.userInfo,
      publisherName: 'name',
      publishedTime: '2022',
      commentNumber: 100,
    };
  }
}
