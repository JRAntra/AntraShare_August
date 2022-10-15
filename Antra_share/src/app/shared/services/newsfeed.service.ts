import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // imported after HttpClientModule is placed into app.module
import { storyInterface } from '../interfaces/storyInterface';

//
@Injectable({
  providedIn: 'root',
})
export class NewsfeedService {
  storyList = ['first', 'second'];


  private _url : string = "http://localhost:4231/api/news"
 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<storyInterface[]> {
    return this.http.get<storyInterface[]>(this._url);
  }
}
