import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() story? : NewsfeedStory
  @Input() publisherName? : string
  @Input() publishedTime? : string
  
  constructor() { }

  ngOnInit(): void {
  }

}
