import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  displayIndicator = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigatingTo(dest: string) {
    this.router.navigateByUrl(dest);
  }

  title = 'Antra_share';

  toggleIndicator() {
    this.displayIndicator = !this.displayIndicator;
  }
}
