import { Component, Input, OnInit } from '@angular/core';
import { StorylistService } from '../services/storylist.service';
import { LikeList, Post, Content } from '../../shared/models/post';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private stroyListService : StorylistService) { }

  @Input() post? : Post;

  ngOnInit(): void {
  }

  likePost() {
    const _post: LikeList = {
      publisherName: this.post?.publisherName as string,
      publishedTime: this.post?.publishedTime as string,
      content: this.post?.content as Content,
      _id: this.post?._id as string
    };
    this.stroyListService.addPostToLikeList(_post);
  }
}
