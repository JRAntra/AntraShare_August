import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Post } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  url ="http://localhost:4231/api/news";

  constructor(private http: HttpClient) { }
 
 
  addPost(newpost : Post ):Observable<Post>{
    return this.http.post<any>(this.url,newpost)
  }

  
}

