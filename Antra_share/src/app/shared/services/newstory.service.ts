import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewstoryService {
  private _url : string = "http://localhost:4231/api/news";
  
  constructor(private http : HttpClient) { }

  postStory (story: any) {
    let body = {
      publisherName: "missing name!",
      // publisher time is automatically acquired by the backend
      content: {
        image: story.image,
        video: story.video,
        text: story.text,
      },

    }
    return this.http.post(this._url, body);
  }
}
