import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedStoryService {


  constructor(private http: HttpClient) { }

  getNewsFeedStory(): Observable<NewsfeedStory[]> {
   return this.http.get<NewsfeedStory[]>("http://localhost:4231/api/news")
  }
}