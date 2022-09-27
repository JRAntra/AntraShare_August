import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.sass']
})
export class UserListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usersList: string[] = ['User Tag 1', 'User Tag 2', 'User Tag 3', 'User Tag 4', 'User Tag 5'];
}
