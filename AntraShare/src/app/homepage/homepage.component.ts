import { Component, OnInit } from '@angular/core';
import { NewsfeedStory } from '../shared/models/story';
import { NewsfeedStoryService } from './services/newsfeed-story.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  storyList: any
  storyListFromParent: NewsfeedStory[] = []
  //storyListFromParent: any
  constructor(private newsfeedStoryService : NewsfeedStoryService) { 
    //const newsfeedStoryService = new NewsfeedStoryService()

  }
  //TO DO: convert json to newsfeed story
  convertToNewsfeedStory(story: any): NewsfeedStory {
    let newNewsfeedStory = {
      _id: story._id,
      publisherName: story.publisherName,
      publishedTime: story.publishedTime,
      comment: story.comment,
      content: story.content,
      likedList: story.likedIdList,

    }
    //console.log(Object.keys(story))
    return newNewsfeedStory
  } 
  ngOnInit(): void {
    this.newsfeedStoryService.getNewsfeedStory().subscribe( value => {
      //console.log(value)
      //this.storyList = value
      //this.storyListFromParent = value
      for (const [key,val] of Object.entries(value)) {
        //console.log(key,val)
        this.storyListFromParent.push(this.convertToNewsfeedStory(val))
      }
      console.log(this.storyListFromParent)
    });
    //this.storyList = this.newsfeedStoryService.storyList 
  }

}
