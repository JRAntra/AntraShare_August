import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { PostStoryService } from '../../services/post-story.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.sass']
})
export class PostformComponent implements OnInit {
  postForm: FormGroup = new FormGroup({
    ["text"] : new FormControl(),
    ["media"] : new FormControl()
    //TODO: 1. image and video upload 
    //      2. validate user input
  })
  constructor(private service: NewsfeedStoryService) {}

  ngOnInit(): void {
  }
  onPostButtonClick(){
    const story : NewsfeedStory = {
      //TODO: get username from local storage for now
      publisherName: "90DegreesHardCodeName",
      content: {text: this.postForm.controls['text'].value}
    }
    this.service.postStory(story).subscribe(
      //TODO: handle response
      res => {
        console.log(res)
        this.service.updateStoryList()
      }

    )
  }
}