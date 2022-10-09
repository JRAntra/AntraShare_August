import { Component, Input, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { LikeList, Post, Content } from '../../../../shared/models/post';
import { MatDialog } from '@angular/material/dialog';
import { ListCommentComponent } from './components/list-comment/list-comment/list-comment.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private storyListService : StorylistService,
    public dialog: MatDialog) { }

  @Input() post? : Post;
  isLiked: Boolean = false;
  likeColor: string = "black";

  ngOnInit(): void {
    this.post?.comment?.reverse();
  }

  openDialog() {
    this.dialog.open(ListCommentComponent, {
      width: '50vw',
      height: '75vh',
      data: {
        comments: this.post?.comment,
        postId: this.post?._id,
      }
    })

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
      this.storyListService.addPostToLikeList(_post);
    } else {
      this.storyListService.deletePostFromLikeList(this.post?._id as string);
    }
    this.likeColor = this.isLiked ? "blue" : "black";
  }
}
