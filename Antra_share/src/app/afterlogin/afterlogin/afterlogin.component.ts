import { Component, OnInit } from '@angular/core';
import { storyInterface } from 'src/app/shared/interfaces/storyInterface';
import { NewsfeedService } from 'src/app/shared/services/newsfeed.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.sass']
})
export class AfterloginComponent implements OnInit {

  public storyList: storyInterface[] = [];

  constructor(private newsfeeddata : NewsfeedService) {}

  ngOnInit(): void {
    // grab all the junk from the database
    this.newsfeeddata.getPosts().subscribe(
      data => {
        //console.log(data)
        this.storyList = data;
      }
    )
  }

  like() {
    // do nothing for now
  }
}
