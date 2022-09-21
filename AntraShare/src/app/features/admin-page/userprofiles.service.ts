import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Post {
  publisherName: string;
  content: {
    text: string;
    image: string;
    video: string;
};
  publishedTime: string;
  comment: object[];
  likedIdList: object[];
}

@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]>{
    return (console.log(this.http.get<Post[]>("http://localhost:4231/api/news")))
  }
}
