import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkValidate } from 'src/app/shared/validators/checkUsername';
import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { Login } from 'src/app/shared/models/login';
import { UserProfile } from 'src/app/shared/models/userprofile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  constructor(
    private router : Router,
    private service: ValidateLoginService,
    private postService: PostLoginService,
  ) { }



  form: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ],[
      checkValidate(this.service)
    ]),
    password: new FormControl('',[
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.required,
    ])
  })

  ngOnInit(): void {
    this.form.controls["username"].setAsyncValidators(checkValidate(this.service))
  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)

  }

  get password(): FormControl {
    return this.form.get("password") as FormControl
  }

  get username(): FormControl {
    return this.form.get("username") as FormControl
  }

  get formgroup(): FormGroup {
    return this.form
  }

  sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 OnLoginClick() {
  const userInfo : Login = {
    // userEmail: 'richard@gmail.com',
    userEmail: this.form.controls['username'].value,
    password: this.form.controls['password'].value
    // how do you find out correct password?
    // You don't need to, it compares the encrypted version submitted with the login page and compares it to a given user.
  }
  var profile: UserProfile;
  // read data from observable into profile
  this.postService.postLogin(userInfo).subscribe(data => {
    profile=data
    // updates role of user
    this.postService.updateRole(profile.userRole);
    // After the post request confirms valid login info and that there is indeed a role in local storage...
    if (this.postService.getRole()) {
      // ... go on to the home page!
      this.onNavigateTo('home');
    }

  })
 }
  

}
