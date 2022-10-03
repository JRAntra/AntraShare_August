import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {

  likedList : NewsfeedStory[] = []
  likeListSubject =  new BehaviorSubject<NewsfeedStory[]>([]);
  storyList : NewsfeedStory[] = []
  storySubject =  new BehaviorSubject<NewsfeedStory[]>([]);

  constructor(private http: HttpClient) { }
  postStory(story: NewsfeedStory) : Observable<NewsfeedStory>{
    return this.http.post<NewsfeedStory>("http://localhost:4231/api/news", story)
  }

  updateStoryList() {
    this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news").subscribe(values => {
      this.storyList = values
      this.storySubject.next(this.storyList.reverse())
    })
  }

  addToLikeList(likedPost: NewsfeedStory) {
    console.log(likedPost)
    this.likedList.push(likedPost)
    this.likeListSubject.next(this.likedList)
  }

  deleteFromLikeList(postId: string | undefined) {
    this.likedList = this.likedList.filter(post => post._id !== postId)
    this.likeListSubject.next(this.likedList)
  }
}