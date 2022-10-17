import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkValidate } from 'src/app/shared/validators/checkUsername';
import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { Login } from 'src/app/shared/models/login';
import { UserProfile } from 'src/app/shared/models/userprofile';
import { userToken } from 'src/app/shared/models/userToken';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ValidateLoginService,
    private postService: PostLoginService,
  ) { }



  form: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ], [
      checkValidate(this.service)
    ]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.required,
    ])
  })

  ngOnInit(): void {
    this.form.controls["userEmail"].setAsyncValidators(checkValidate(this.service))

  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)

  }

  get password(): FormControl {
    return this.form.get("password") as FormControl
  }

  get userEmail(): FormControl {
    return this.form.get("userEmail") as FormControl
  }

  get formgroup(): FormGroup {
    return this.form
  }



  OnLoginClick() {
    const userInfo: Login = {
      userEmail: this.form.controls['userEmail'].value,
      password: this.form.controls['password'].value
  
    }
    let profile : UserProfile;
    let token : userToken | null;
    this.postService.postLogin(userInfo).subscribe(res => {
      profile = res 
      console.log(profile)
      this.postService.setToken(res["token"])
      token = this.postService.getToken()
      console.log(token)
    }) 
  }


}