import { Component, OnInit } from '@angular/core';
import { StorylistService } from '../../services/storylist.service';
import { Post } from 'src/app/shared/model/Post';
@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.sass']
})
export class StorylistComponent implements OnInit {

  postlist: Post[] = [];
  constructor(private service: StorylistService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(values => {
      this.postlist = values;
      console.log(this.postlist)
    })
  }

}
