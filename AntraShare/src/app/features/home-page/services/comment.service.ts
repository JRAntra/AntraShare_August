import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(private http: HttpClient) {}
  postComment(id: string | undefined, body: Comment){
    // return this.http.patch<Comment>("http://localhost:4231/api/news/addComment/" + id, body)
    return this.http.patch<Comment>("http://localhost:3000/news/addComment/" + id, body)
  }
  deleteComment(id: string | undefined, commentId: string | undefined){
    // return this.http.delete("http://localhost:4231/api/news/deleteComment/" + id + '/' + commentId)
    return this.http.delete("http://localhost:3000/news/deleteComment/" + id + '/' + commentId)
  }
}
