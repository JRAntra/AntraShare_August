import { Component, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {
  postlist: NewsfeedStory[] = [];
  constructor(private service: StorylistService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(values => {
      this.postlist = values;
      console.log(this.postlist)
    })
  }

}
