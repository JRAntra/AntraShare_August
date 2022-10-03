import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {
  postlist: NewsfeedStory[] = [];
  constructor(private service: NewsfeedStoryService) {}

  ngOnInit(): void {
    
    this.service.storySubject.subscribe(values => {
      console.log(values)
      this.postlist = values;
    })
    this.service.updateStoryList()
  }

}
