import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorylistService } from 'src/app/features/homepage/services/storylist.service';
import { Comment, Content } from 'src/app/shared/models/post';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.sass']
})
export class ListCommentComponent implements OnInit {

  currentCommentsToShow: Comment[] = [];
  listComments: Comment[] = [];
  subjectListComments: Subject<Comment[]> = new Subject<Comment[]>;
  postId: string = "";

  pageSize: number = 5;
  pageIndex: number = 0;
  pageSzieOption: number[] = [5, 10, 20];

  constructor(
    private service: StorylistService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ListCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.listComments = data.comments;
    this.postId = data.postId;
  }

  userComment = this.fb.group({
    commentText: [
      ""
    ],
    commentImage: [
      ""
    ],
    commentVideo: [
      ""
    ]
  })

  ngOnInit(): void {
    this.currentCommentsToShow = this.listComments.slice(0, this.pageSize);
  }

  onPageChange($event: { pageIndex: number; pageSize: number; }) {
    this.currentCommentsToShow = this.listComments.slice(
      $event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize
    );
    this.pageSize = $event.pageSize;
    this.pageIndex = $event.pageIndex;
  }

  postNewComment() {
    const _text = this.userComment.get('commentText')?.value as string;
    const _image = this.userComment.get('commentImage')?.value as string;
    const _video = this.userComment.get('commentVideo')?.value as string;
    const _cotent: Content = {
      text: _text,
      image: _image,
      video: _video,
    };
    this.userComment.get('commentText')?.setValue('');
    this.userComment.get('commentImage')?.setValue('');
    this.userComment.get('commentVideo')?.setValue('');

    this.service.addNewCommentToServer(_cotent, this.postId).subscribe(
      res => console.log(res)
    );

    // Add comment locally
    const _publisherName = "TeamWashington";
    const _publishedTime = new Date();
    const _comment: Comment = {
      content: _cotent,
      publisherName: _publisherName,
      publishedTime: _publishedTime.toString(),
      _id: "123456789",
    }
    this.listComments.unshift(_comment);
    this.currentCommentsToShow = this.listComments.slice(
      this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize
    );
  }

  removeComment(commentId: string) {
    this.service.deleteComment(this.postId, commentId).subscribe(
      res => console.log(res)
    );

    // delete comment locally
    for (let i = this.listComments.length - 1; i >= 0; i--) {
      if (this.listComments[i]._id === commentId) {
        this.listComments.splice(i, 1);
        break;
      }
    }
    // this.listComments = this.listComments.filter(comment => comment._id !== commentId)
    this.currentCommentsToShow = this.listComments.slice(
      this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize
    );
  }

}
