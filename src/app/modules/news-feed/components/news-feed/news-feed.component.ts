import { Component, OnInit } from '@angular/core';
import { NewsFeedStoryService } from '../../services/news-feed-story.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private newsFeedService: NewsFeedStoryService) {
  }
  storyList:any
  ngOnInit(): void {
    this.newsFeedService.getNewsFeedStory().subscribe(
      value=>this.storyList = value
      )

    // setInterval(() => {
    //   this.leftSeconds -= 1000;
    // }, 1000);
    this.interval()
    //clear interval
    
  }
  //warning
  showWarning: boolean = true;
  showWarningTime: number = 5000;
  leftSeconds = this.showWarningTime;
  interval = () => {
    setInterval(() => {
      this.leftSeconds -= 1000;
    }, 1000);
  }
  
  //posts
  posts: string[] = [];
  eventData: string = '';
  handleInput = (eventData: Event) => {
    this.eventData = (<HTMLInputElement>eventData.target).value;
    console.log((<HTMLInputElement>eventData.target).value);
  };
  handlePost = (event: any) => {
    event.preventDefault();
    this.posts.unshift(this.eventData);
  };
}
