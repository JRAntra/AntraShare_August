import { Component, OnInit } from '@angular/core';
import { NewsFeedStory } from 'src/app/shared/models/newsfeed';
import { NewstoryService } from 'src/app/shared/services/newstory.service';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.sass'],
})
export class ListDialogComponent implements OnInit {
  likeList: NewsFeedStory[] = [];
  constructor(private service: NewstoryService) {}

  ngOnInit(): void {
    this.service.likeListSubject.subscribe((res) => {
      this.likeList = res;
    });
  }
  removeLike(postId: string | undefined) {
    this.service.removeFromLikeList(postId);
    this.ngOnInit();
  }
}
