import { Component, OnInit } from '@angular/core';
import { NewsfeedStoryService } from '../../services/newsfeed-story.service';
import { NewsfeedStory } from 'src/app/shared/models/newsfeed';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from './list-dialog/list-dialog.component';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {
  
  //public showList = false
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  

  toggleList() {
    const dialogRef = this.dialog.open(ListDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}
