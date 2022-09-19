import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/model/Post';

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

  @Input() post? : Post;

}
