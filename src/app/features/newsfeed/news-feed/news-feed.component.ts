import { Component, OnInit } from '@angular/core';
import { NewsFeedStoryService } from '../service/newsfeed-story.service';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent implements OnInit {

  constructor( private newsFeedService: NewsFeedStoryService) { }
  storyList:any
  ngOnInit(): void {
    this.newsFeedService.getNewsFeedStory().subscribe(
      value=>this.storyList = value
    )


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
