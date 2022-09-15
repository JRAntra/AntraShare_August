import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.sass']
})
export class LikelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showList = false

  likedList = [
    {
      name: 'Britney Spears',
      time: '14:00',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'piebaconcookie',
      time: '16:00',
      content: 'Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.'
    },
    {
      name: 'Minneapolis',
      time: '18:00',
      content: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      name: 'Traveler3322',
      time: '13:00',
      content: 'Nisl tincidunt eget nullam non nisi est sit.'
    },
    {
      name: 'banana',
      time: '17:00',
      content: 'Quis viverra nibh cras pulvinar.'
    }
  ]

  toggleList() {
    this.showList = !this.showList
  }

}
