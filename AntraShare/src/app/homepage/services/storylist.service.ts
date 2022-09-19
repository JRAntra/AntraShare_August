import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class StorylistService {

  constructor(private httpClient: HttpClient) { }
  
  getStoryListsFromServer(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("http://localhost:4231/api/news");
  }
}
