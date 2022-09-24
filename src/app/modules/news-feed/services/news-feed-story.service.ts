import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedStoryService {
  constructor(private http: HttpClient) {}
  storyList: any = [];
  getNewsFeedStory(): Observable<any> {
    return this.http.get<any>('http://localhost:4231/api/news');
  }
}
