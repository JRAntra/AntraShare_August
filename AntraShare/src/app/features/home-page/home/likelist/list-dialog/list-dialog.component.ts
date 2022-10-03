import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { NewsfeedStoryService } from '../../../services/newsfeed-story.service';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.sass']
})
export class ListDialogComponent implements OnInit {
  likeList: NewsfeedStory[] = []
  constructor(private service: NewsfeedStoryService) { }

  ngOnInit(): void {
    this.service.likedListSubject.subscribe(
      res => {this.likeList = res}
    )
  }

  deleteLike(postId: string | undefined) {
    this.service.deleteFromLikeList(postId)
    this.ngOnInit()

  }

}
