import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { ValidateUsernameService } from 'src/app/shared/services/validate-username.service';
import { ValidateEmailService } from 'src/app/shared/services/validate-email.service';
import { checkPasswordComplexity, doesEmailMatch, doesPasswordMatch, doesUsernameExist } from 'src/app/shared/validators/validators';
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';
import { ValidateRegisterService } from 'src/app/shared/services/validate-register.service';
import { checkValidate } from 'src/app/shared/validator/validators';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private validateService: ValidateRegisterService
  ) {}


  constructor(
    private fb : FormBuilder, 
    private usernameService : ValidateUsernameService, 
    private emailService : ValidateEmailService, 
    private registerService: RegisterService,
    private _router : Router,
    ) {}

  public tempValidator : boolean = false;
  public tempMessage : string = '';

  registerPanel = this.fb.group({
    username: [
      '', // first input is starting value
      [
        Validators.required,
      ],
      [
        doesUsernameExist.validator(this.usernameService),
      ]
    ],
    email: [
      '',
      [
        Validators.required,
      ],
      [
        doesEmailMatch.validator(this.emailService),
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
      ],
      [
        checkPasswordComplexity
      ]
    ],
    repass: [ // reinput password
      '',
      [
        // empty regular validators
      ],
      [
        // custom validator
        // doesPasswordMatch()
      ]
    ],
  })

  ngOnInit(): void {
    console.log(this.registerPanel.controls['username']);
    console.log(this.registerPanel);
  }

  // for when register is clicked
  onRegister() {
    // run before registration process
    this.registerPanel.updateValueAndValidity();

    // create register object
    let register = {
      username: this.registerPanel.get('username')?.value,
      email: this.registerPanel.get('email')?.value,
      password: this.registerPanel.get('password')?.value
    }

    this.registerService.register(register).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Registration: HTTP error', err);
        this.tempValidator = true;
        this.tempMessage = err.error;
        // place errors here
      },
      () => {
        console.log('Registration: HTTP request complete');
        // backend handles registration so we do not have to worry
        this._router.navigate(['login']);
      }
    )
  }

  // display values
  showError(key : string) : string{
    // console.log(key);
    // console.log(this.registerPanel.controls['repass']);
    if(!this.registerPanel.pristine) {
      if(key === "required")
        return 'This is a required field';
      else if(key === 'minlength')
        return 'Passwords have a minimum length of 8';
      else if(key === 'validusername')
        return 'Username already in use';
      else if(key === 'validemail')
        return 'Email already in use';
      else if(key === 'notcomplex')
        return 'Password must have at least 1 uppercase, 1 lowercase, 1 special character';
      else if(key === 'notsame')
        return 'Passwords are not matching.'
      else
        return '';
    }
    else
      return '';
  }

  // errors
  get username() {
    return this.registerPanel.get("username");
  }
  get email() {
    return this.registerPanel.get("email");
  }
  get password() {
    return this.registerPanel.get("password");
  }
  get repass(){
    return this.registerPanel.get("repass");
  }

  // getters for the errors themselves
  get errorMessageUsername() : any{
    const arr = [];
    for(let key in this.username?.errors) {
      arr.push(key);
    }
    return arr;
  }
  get errorMessageEmail() : any{
    const arr = [];
    for(let key in this.email?.errors) {
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
  get errorMessageRepass() : any{
    const arr = [];
    for(let key in this.repass?.errors) {
      arr.push(key);
    }
    return arr;

 /* userPanel = this.fb.group({
    username: new FormControl('', [Validators.minLength(7)]),
    email: new FormControl('', [checkValidate(this.validateService)]),
    password: new FormControl(''),
    passwordConfirm: new FormControl(),
  });

  get password(): FormControl {
    return this.userPanel.get('password') as FormControl;*/

  }

  get username(): FormControl {
    return this.userPanel.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.userPanel.get('email') as FormControl;
  }

  ngOnInit(): void {}
}
