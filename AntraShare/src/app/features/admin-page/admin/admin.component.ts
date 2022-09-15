import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public showlist = true;

  userslist = [
    {
      name: 'Piebaconcookie',
      email: 'richardwu90@gmail.com',
      function: 'Delete'
    },
    {
      name: 'Banana',
      email: 'banana@slug.com',
      function: 'Delete'
    },
    {
      name: 'Minneapolis',
      email: 'notBurntToRuins@hotmail.com',
      function: 'Delete'
    },
    {
      name: 'Ice Cream',
      email: 'icecream@soda.com',
      function: 'Delete'
    },
    {
      name: 'Xx69DemonSlayer420xX',
      email: 'myParentsDontLoveMe@gmail.com',
      function: 'Delete'
    }
  ]

}
