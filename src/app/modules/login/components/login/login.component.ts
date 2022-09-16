import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  handleLogin = () => {
    this.router.navigateByUrl('news-feed');
    console.log('a');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
