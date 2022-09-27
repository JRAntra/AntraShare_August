import { Component, OnInit, OnChanges } from '@angular/core';
import { StorylistService } from '../services/storylist.service';
import { LikeList } from 'src/app/shared/models/post';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass']
})
export class LikeListComponent implements OnInit {

  constructor(private service: StorylistService) { }

  likeList: LikeList[] = [];

  ngOnInit(): void {
    this.service.getLikeList().subscribe(value => {
      this.likeList = value;
    });
  }

  removePost(postId: string) {
    this.service.deletePostFromLikeList(postId);
  }
}
