import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/shared/model/Post';
@Injectable({
  providedIn: 'root'
})
export class StorylistService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:4231/api/news")
  }
}
