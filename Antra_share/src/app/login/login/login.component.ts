import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidateUsernameService } from 'src/app/shared/services/validate-username.service';
import { doesUsernameMatch } from 'src/app/shared/validators/validators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public tempValidator : boolean = false;
  public tempMessage : string = '';

  constructor(private fb : FormBuilder, private validateService : ValidateUsernameService, private loginService : LoginService, private _router: Router) { }

  // Reactive form thing
  userPanel = this.fb.group({
    username: [
      '',
      [
        Validators.required,
      ],
      [
        doesUsernameMatch.validator(this.validateService),
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ],
    ]
  })

  // below shows how to do it without formbuilder
  // userPanel = new FormGroup({
  //   username : new FormControl("",[
  //     Validators.required,
  //     doesUsernameMatch.validator(this.validateService),
  //   ]),
  //   password : new FormControl("",[
  //     Validators.required,
  //     Validators.minLength(8)
  //   ])
  // })

  // getters work too
  // get username() {
  //   return this.userPanel.controls['username'] as FormControl;
  // }

  // get password() {
  //   return this.userPanel.controls['password'] as FormControl;
  // }

  // don't forget about formbuilder!
  // formarrays are for multiple formgroups

  ngOnInit(): void {
  }

  onLogin() {
    // run when login button is clicked
    this.userPanel.updateValueAndValidity();

    // create user object
    let user = {
      username: this.userPanel.get("username")?.value,
      password: this.userPanel.get("password")?.value
    }

    this.loginService.login(user).subscribe(
      data => {
        console.log(data);
      },
      err => {
        // if there is an error, 
        console.log('Login: HTTP error', err);
        this.tempValidator = true;
        this.tempMessage = err.error;
      },
      () => {
        console.log('Login: HTTP request complete');
        // we also need to store login data somewhere
        this._router.navigate(['newsfeed']); // route
      }
      ) 
  }

  consolelog() {
    console.log(this.userPanel.controls['username']);
  }

  showError(key : string) : string{
    // console.log(key);
    if(!this.userPanel.pristine) {
      if(key === "required")
        return 'This is a required field';
      else if(key === 'minlength')
        return 'Passwords have a minimum length of 8';
      else if(key === 'validusername') 
        return 'Invalid username';
      else
        return '';
    }
    else
      return '';
  }

  // this is for errors
  get username() {
    return this.userPanel.get("username");
  }

  get password() {
    return this.userPanel.get("password");
  }

  // i'm not sure how to do this without angular materials and without copy pasting this twice
  get errorMessageUsername() : any{
    const arr = [];
    for(let key in this.username?.errors) {
      arr.push(key);
    }
    return arr;
  }

  get errorMessagePassword() : any{
    const arr = [];
    for(let key in this.password?.errors) {
      arr.push(key);
    }
    return arr;
  }

}
