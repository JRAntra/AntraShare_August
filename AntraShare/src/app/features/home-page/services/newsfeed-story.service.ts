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