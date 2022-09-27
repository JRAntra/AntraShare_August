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
  // newItems: Post[] = [];
  item: any;
  newPosts: any;
 
  
  constructor(private postService: PostServiceService) { }
  
  ngOnInit(): void {
  }
 
  
onPost(){
  this.postService.addPost(this.item).subscribe(data => console.log(data))
}

  // addToPost(item: Post){
  //   this.postService.addToPost(item);
  //   window.alert("your post added");
  // }

}
