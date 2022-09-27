import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';

@Injectable({
  providedIn: 'root'
})
export class PostStoryService {

  constructor(private http: HttpClient) {}
  postStory(story: NewsfeedStory){
    return this.http.post("http://localhost:4231/api/news", story)
  }
}
