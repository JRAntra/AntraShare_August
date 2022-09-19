import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorylistService {

  constructor(private httpClient: HttpClient) { }

  getStoryListsFromServer(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:4231/api/news");
  }
}
