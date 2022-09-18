import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  onRegisterGoTo =() =>{
    this.router.navigateByUrl('login')
    }
  ngOnInit(): void {
  }
  // navigateTo(dest: string){
  //   this.router.navigateByUrl(dest)
  // }

}
