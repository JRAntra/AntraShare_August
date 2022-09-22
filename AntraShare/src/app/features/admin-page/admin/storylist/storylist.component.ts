import { Component, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.sass']
})
export class StorylistComponent implements OnInit {

  postlist: NewsfeedStory[] = [];
  constructor(private service: StorylistService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(values => {
      this.postlist = values;
    })
  }

}
