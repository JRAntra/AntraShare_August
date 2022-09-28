import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  likedList : LikeList[] = []


  constructor(private http: HttpClient) { }

  getNewsFeedStory(): Observable<NewsfeedStory[]> {
   return this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news")
  }

  getLikeList(): Observable<LikeList[]> {
    return of(this.likedList);
  }

  addToLikeList(likedPost: LikeList) {
    this.likedList.push(likedPost)
  }

  deleteFromLikeList(postId: string) {
    this.likedList = this.likedList.filter(post => post._id !== postId)
  }
}