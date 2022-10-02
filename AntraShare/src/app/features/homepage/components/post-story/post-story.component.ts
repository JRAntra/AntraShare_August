import { Component, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Content } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.sass']
})
export class PostStoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: StorylistService
  ) { }

  userPost = this.fb.group({
    postText: [
      ""
    ],
    postImage: [
      ""
    ],
    postVideo: [
      ""
    ]
  })

  ngOnInit(): void {
  }

  postNewStory() {
    const _text = this.userPost.get('postText')?.value as string;
    const _image = this.userPost.get('postImage')?.value as string;
    const _video = this.userPost.get('postVideo')?.value as string;
    const _content: Content = {};
    // Some attributes are optional
    if (_text !== '') _content.text = _text;
    if (_image !== '') _content.image = _image;
    if (_video !== '') _content.video = _video;

    this.service.postNewStoryToServer(_content).subscribe(
      // res => console.log(res)
    );
  }

}
