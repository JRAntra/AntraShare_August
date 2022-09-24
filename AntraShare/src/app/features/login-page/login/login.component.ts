import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { checkValidate } from 'src/app/shared/validators/checkUsername';
import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private fb: FormBuilder,
    private service: ValidateLoginService,
  ) { }

  userPanel = this.fb.group({
    username: new FormControl('',[
      Validators.required,
      checkValidate(this.service),
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

  get password(): FormControl {
    return this.userPanel.get("password") as FormControl
  }

  get username(): FormControl {
    return this.userPanel.get("username") as FormControl
  }


}
