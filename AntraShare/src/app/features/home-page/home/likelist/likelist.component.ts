import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from './list-dialog/list-dialog.component';


@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    
  }

  toggleList() {
    const diaglogRef = this.dialog.open(ListDialogComponent)
    diaglogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

}
