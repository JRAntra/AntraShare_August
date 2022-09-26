import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  // function for toggling likelist
  @Output() buttonClicked = new EventEmitter();
  toggleHide() {
    this.buttonClicked.emit(null);
  }

  ngOnInit(): void {
  }

}
