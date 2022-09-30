import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, LikeList, Content } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class StorylistService {

  constructor(private httpClient: HttpClient) { }
  
  subjectLikeList: Subject<LikeList[]> = new Subject<LikeList[]>();
  likedList: LikeList[] = [];

  getStoryListsFromServer(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("http://localhost:4231/api/news");
  }

  getLikeList(): Subject<LikeList[]> {
    return this.subjectLikeList;
  }

  addPostToLikeList(likedPost: LikeList) {
    this.likedList.push(likedPost);
    this.subjectLikeList.next(this.likedList);
  }

  deletePostFromLikeList(postId: string) {
    this.likedList = this.likedList.filter(post => post._id !== postId);
    this.subjectLikeList.next(this.likedList);
  }

  postNewStoryToServer(newStory: Content): Observable<Post> {
    const _post = {
      publisherName: "TeamWashington",
      content: newStory,
    };
    return this.httpClient.post<Post>("http://localhost:4231/api/news", _post);
  }
}
