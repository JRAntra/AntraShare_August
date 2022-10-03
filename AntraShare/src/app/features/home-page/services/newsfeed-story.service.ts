import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  likedList : NewsfeedStory[] = []
  likedListSubject = new BehaviorSubject<NewsfeedStory[]>([])


  constructor(private http: HttpClient) { }

  getNewsFeedStory(): Observable<NewsfeedStory[]> {
   return this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news")
  }



  addToLikeList(likedPost: LikeList) {
    this.likedList.push(likedPost)
    this.likedListSubject.next(this.likedList)
  }

  deleteFromLikeList(postId: string | undefined) {
    this.likedList = this.likedList.filter(post => post._id !== postId)
    this.likedListSubject.next(this.likedList)
  }
}