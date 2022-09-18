import { Component, Input, OnInit } from '@angular/core';
import {  NewsfeedStory } from 'src/app/shared/models/story';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.sass']
})
export class ListStoryComponent implements OnInit {

  @Input() storyList? : NewsfeedStory[]

  constructor() { }

  ngOnInit(): void {
  }
}
