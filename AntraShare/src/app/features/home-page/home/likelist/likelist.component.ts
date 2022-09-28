import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { LikeList } from 'src/app/shared/models/newsfeed';


@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  likeList: LikeList[] = []
  public showList = false
  constructor(private service: NewsfeedStoryService) { 
  }

  ngOnInit(): void {
    this.service.getLikeList().subscribe(values => {
      this.likeList = values;
    })
    
  }


  deleteLike(postId: string) {
    this.service.deleteFromLikeList(postId);
    this.ngOnInit();
  }


  toggleList() {
    this.showList = !this.showList
  }

}
