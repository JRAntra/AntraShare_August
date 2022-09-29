import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  likedList : NewsfeedStory[] = []
  likeListSubject =  new Subject<NewsfeedStory[]>();

  constructor(private http: HttpClient) { }

  getNewsFeedStory(): Observable<NewsfeedStory[]> {
   return this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news")
  }

  addToLikeList(likedPost: LikeList) {
    this.likedList.push(likedPost)
    this.likeListSubject.next(this.likedList)
  }

  deleteFromLikeList(postId: string | undefined) {
    this.likedList = this.likedList.filter(post => post._id !== postId)
    this.likeListSubject.next(this.likedList)
  }
}