import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { LikeList, NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  likeList: NewsfeedStory[] = []
  public showList = false
  
  constructor(private service: NewsfeedStoryService) { 
  }

  ngOnInit(): void {
    this.service.likeListSubject.subscribe(
      res => {this.likeList = res}
    )
  }

  deleteLike(postId: string | undefined) {
    this.service.deleteFromLikeList(postId);
    console.log(postId)
    this.ngOnInit();
  }

  toggleList() {
    this.showList = !this.showList
  }

}
