import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { storyInterface } from 'src/app/shared/interfaces/storyInterface';
import { NewsfeedService } from 'src/app/shared/services/newsfeed.service';
import { NewstoryService } from 'src/app/shared/services/newstory.service';
import { LikeListService } from 'src/app/shared/services/like-list.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.sass']
})
export class AfterloginComponent implements OnInit {

  public storyList: storyInterface[] = [];
  // public likedStories: storyInterface[] = [];

  constructor(
    private newsfeeddata : NewsfeedService,
    private newsstory : NewstoryService,
    private fb : FormBuilder,
    private likeList : LikeListService,
    ) {}

  // for posting news
  newsPoster = this.fb.group({
    image: [''],
    video: [''],
    text: ['']
  })

  ngOnInit(): void {
    // grab all the junk from the database
    this.newsfeeddata.getPosts().subscribe(
      data => {
        console.log(data)
        this.storyList = data;
      }
    )
  }

  onPost() {
    this.newsPoster.updateValueAndValidity();

    let post = {
      image: this.newsPoster.get("image")?.value,
      video: this.newsPoster.get("video")?.value,
      text: this.newsPoster.get("text")?.value,
    }

    this.newsstory.postStory(post).subscribe(
      data => {
        // console.log(data);
      },
      err => {
        // how could this possibly return an error?
        console.log('Post Story: What an error!', err);
      },
      () => {
        console.log('Post Story: Complete');
      }
    )
  }

  like(index: number) {
    // TODO: push like ID to list
    // console.log(this.storyList[index]);

    // emit this info to likelist
    this.likeList.raiseDataEmitterEvent(this.storyList[index]);
  }
}
