import { Component, OnInit } from '@angular/core';
import { StorylistService } from '../services/storylist.service';
import { Post } from '../../../shared/models/post';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.sass']
})
export class ListStoryComponent implements OnInit {

  constructor(private stroyListService : StorylistService) { }

  storyList: Post[] = [];

  ngOnInit(): void {
    this.stroyListService.getStoryListsFromServer().subscribe(values => {
      this.storyList = values;
    })
  }

}
