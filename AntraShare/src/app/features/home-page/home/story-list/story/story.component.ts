import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../../services/newsfeed-story.service';
import { LikeList, Content, NewsfeedStory } from 'src/app/shared/models/newsfeed';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(private newsFeedService : NewsfeedStoryService) { }

  ngOnInit(): void {
   
  }

  @Input() post? : NewsfeedStory;

  saveLike() {
    const _post: LikeList = {
      publisherName: this.post?.publisherName as string,
      publishedTime: this.post?.publishedTime as string,
      content: this.post?.content as Content,
      _id: this.post?._id as string
    };
    this.newsFeedService.addToLikeList(_post)
  }

}
