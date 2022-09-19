import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  newsFeedList: NewsfeedStory[] = []
  constructor(private service: NewsfeedStoryService) { }

  ngOnInit(): void {
    this.service.getNewsFeedStory().subscribe(values => {
      this.newsFeedList = values;
    })
  }

  public showList = false



  toggleList() {
    this.showList = !this.showList
  }

}
