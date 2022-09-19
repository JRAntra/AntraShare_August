import { Component, Input, OnInit } from '@angular/core';
import { StorylistService } from '../services/storylist.service';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private stroyListService : StorylistService) { }

  ngOnInit(): void {
  }

  @Input() post? : Post;
}
