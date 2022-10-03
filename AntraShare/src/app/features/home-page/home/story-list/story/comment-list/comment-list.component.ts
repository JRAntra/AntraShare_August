import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from 'src/app/shared/models/newsfeed';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { PostCommentService } from 'src/app/features/home-page/services/comment.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] | undefined = this.data.comment;
  contentText: FormControl<string> = new FormControl()
  constructor(@Inject(MAT_DIALOG_DATA) public data: NewsfeedStory, private service: PostCommentService) {}
  
  ngOnInit(): void {
  }

  onPostComment(){
    const comment : Comment = {
      publisherName: "90DegreesHardCodeName",
      content: {text: this.contentText.value}
    }
    console.log(typeof this.data._id)
    this.service.postComment(this.data._id, comment).subscribe(
      res => {
        console.log(res)
        this.data.comment?.push(res)
      }
    )
    
  }

  onDeleteComment(id: string | undefined){
    console.log(this.data._id)
    console.log(id)
    this.service.deleteComment(this.data._id, id).subscribe(
      res => {
        console.log(res)
        if(this.data.comment){
          const temp : Comment[]= [...this.data.comment]
          
          this.data.comment?.splice(0)
          this.data.comment?.push(...temp.filter(
            comment => 
              comment._id !== id
          ))
        }
        
        
      }
    )
    
  }
}
