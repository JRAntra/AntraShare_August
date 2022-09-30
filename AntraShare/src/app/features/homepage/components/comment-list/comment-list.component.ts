import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment, Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

commentList: Comment[]= []

constructor(
  public dialogRef: MatDialogRef<CommentListComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.commentList = data.comments.reverse()
    console.log(this.commentList)
  }

  ngOnInit(): void {
    
  }

}
