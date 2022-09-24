import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private fb: FormBuilder,
  ) { }

  userPanel = this.fb.group({
    username: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.minLength(8),
      Validators.required,
    ])
  })

  ngOnInit(): void {

  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }

  get password() {
    return this.userPanel.get("password")
  }

  get username() {
    return this.userPanel.get("username")
  }


}
