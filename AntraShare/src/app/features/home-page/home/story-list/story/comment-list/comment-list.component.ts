import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/shared/models/newsfeed';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Comment[]) {}

  ngOnInit(): void {
    console.log(typeof this.data)
    console.log(this.data)
  }

}
