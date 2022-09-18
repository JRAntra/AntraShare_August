import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from '../shared/models/story';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  storyListFromParent: NewsfeedStory[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
