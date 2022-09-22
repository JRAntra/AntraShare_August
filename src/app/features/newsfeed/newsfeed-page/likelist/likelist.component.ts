import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { NewsFeedStoryService } from '../../service/newsfeed-story.service';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  newsFeedList: NewsfeedStory[]=[]
  
  constructor(private service: NewsFeedStoryService) { }

  ngOnInit(): void {
    this.service.getNewsFeedStory().subscribe(value => {
      this.newsFeedList = value;
    })
  }
  public showList = false

  toggleList() {
    this.showList = !this.showList
  }

}
