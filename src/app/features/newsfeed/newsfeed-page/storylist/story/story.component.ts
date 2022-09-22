import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.post?.publisherName)
  }
  @Input() post? : NewsfeedStory;
}
