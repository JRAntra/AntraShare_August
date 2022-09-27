import { Component, Input, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { LikeList, Post, Content } from '../../../../shared/models/post';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private stroyListService : StorylistService) { }

  @Input() post? : Post;
  isLiked: Boolean = false;
  likeColor: string = "black";

  ngOnInit(): void {
  }

  likePost() {
    this.isLiked = !this.isLiked;

    if (this.isLiked) {
      const _post: LikeList = {
        publisherName: this.post?.publisherName as string,
        publishedTime: this.post?.publishedTime as string,
        content: this.post?.content as Content,
        _id: this.post?._id as string
      };
      // TODO: Update the likes on the post
      this.stroyListService.addPostToLikeList(_post);
    } else {
      this.stroyListService.deletePostFromLikeList(this.post?._id as string);
    }
    this.likeColor = this.isLiked ? "blue" : "black";
  }
}
