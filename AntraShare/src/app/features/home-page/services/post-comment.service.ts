import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(private http: HttpClient) {}
  postComment(id: string | undefined, body: Comment){
    return this.http.patch<Comment>("http://localhost:4231/api/news/addComment/" + id, body)
  }
}
