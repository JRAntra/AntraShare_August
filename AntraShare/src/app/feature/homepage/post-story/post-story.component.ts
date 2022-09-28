import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { PostServiceService } from '../services/post-service.service';
import { StorylistService } from '../services/storylist.service';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.sass']
})
export class PostStoryComponent implements OnInit{
removePost(arg0: any) {
throw new Error('Method not implemented.');
}

// export interface Post {
//   publisherName: string;
//   publishedTime: string;
//   content?: Content;
//   comment?: Comment[];
//   likedIdList?: LikedIdList[];
//   _id: string;
// }
 
  newPost: Post ={
    publisherName: "Eg",
    publishedTime:"123",
   
  }
 
  
  constructor(private postService: PostServiceService) { }
  
  ngOnInit(): void {
  }
 
  
onPost(){
  this.postService.addPost(this.newPost).subscribe(data => console.log(data))
}

}
