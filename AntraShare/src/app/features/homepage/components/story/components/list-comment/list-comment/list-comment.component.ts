import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorylistService } from 'src/app/features/homepage/services/storylist.service';
import { Comment, Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.sass']
})
export class ListCommentComponent implements OnInit {

  listComments: Comment[] = []

  constructor(
    //private service: StorylistService,
    public dialogRef: MatDialogRef<ListCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.listComments = data.comments.reverse()
      console.log(this.listComments)
    }

  ngOnInit(): void {

  }

}
