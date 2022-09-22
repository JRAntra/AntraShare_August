import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  newsFeedList: NewsfeedStory[] = []
  public showList = false
  constructor(private service: NewsfeedStoryService) { 
  }

  ngOnInit(): void {
    this.service.getNewsFeedStory().subscribe(values => {
      this.newsFeedList = values;
    })
    
  }

  





  toggleList() {
    this.showList = !this.showList
  }

}
