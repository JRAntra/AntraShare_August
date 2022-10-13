import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostStoryService {

  constructor(private http: HttpClient){}
  postStory(story: NewsfeedStory) : Observable<NewsfeedStory>{
    // return this.http.post<NewsfeedStory>("http://localhost:4231/api/news", story)
    return this.http.post<NewsfeedStory>("http://localhost:3000/news/", story)
  }
}
