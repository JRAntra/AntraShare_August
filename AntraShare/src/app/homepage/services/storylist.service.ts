import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, LikeList } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class StorylistService {

  constructor(private httpClient: HttpClient) { }
  
  likedList: LikeList[] = [];

  getStoryListsFromServer(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("http://localhost:4231/api/news");
  }

  getLikeList(): Observable<LikeList[]> {
    return of(this.likedList);
  }

  addPostToLikeList(likedPost: LikeList) {
    this.likedList.push(likedPost);
  }

  deletePostFromLikeList(postId: string) {
    this.likedList = this.likedList.filter(post => post._id !== postId);
  }
}
