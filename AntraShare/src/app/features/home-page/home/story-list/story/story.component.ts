import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../../services/newsfeed-story.service';
import { LikeList, Content, NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { MatDialog } from '@angular/material/dialog';
import { CommentListComponent } from './comment-list/comment-list.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private newsFeedService : NewsfeedStoryService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  @Input() post? : NewsfeedStory;

  saveLike() {
    const _post: LikeList = {
      publisherName: this.post?.publisherName as string,
      publishedTime: this.post?.publishedTime as string,
      content: this.post?.content as Content,
      _id: this.post?._id as string
    };
    this.newsFeedService.addToLikeList(_post)
  }
  onCommentClick(){
    console.log(this.post)
    const dialogRef = this.dialog.open(CommentListComponent, {data: this.post})
    dialogRef.afterClosed().subscribe(
      res => {console.log(res)}
    )
  }

}
