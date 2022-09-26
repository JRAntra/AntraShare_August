import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
// import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { noDuplicate} from 'src/app/shared/validators/register-validators'
import {noupper, nolower, nospecial, checkValidateEmail, checkPasswords, profileValidators} from 'src/app/shared/validators/register-validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})


export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  public yes = true;

  public confirmFail = false;
  
  constructor(
    private router : Router,
    private fb: FormBuilder,
    // private validateServiceUser: ValidateLoginService,
    private validateServiceEmail: ValidateRegisterService
  ) { }

  userPanel = this.fb.group({
    username: new FormControl('',[
    Validators.required,
    noDuplicate,
    noupper,
    // checkValidateUser(this.validateServiceUser)
    ]),
    email: new FormControl('', [
      Validators.required,
      checkValidateEmail(this.validateServiceEmail)
    ]),
    password: new FormControl('',[
      Validators.required,
      noupper,
      nolower,
      nospecial
    ]),
    passwordConfirm: new FormControl('',[
      Validators.required,

    ])
  }, { validators: checkPasswords })
  ngOnInit(): void {
    // initialize user

  }

  onInput() {
    if (this.userPanel.errors?.['confirmFail']) {
      this.confirmFail = true;
    } else {
      this.confirmFail = false;
    }
    console.log(this.confirmFail)
    // this.userPanel.controls["username"].setAsyncValidators(profileValidators.asyncValiddateName(this.validateServiceEmail))
    // console.log(this.userPanel.controls["username"].errors)
    console.log(this.email?.errors);
    // console.log(this.username?.errors);
  }

  // showError(key: string): string {
  //   if (key === "required") {
  //     return "the username is required";
  //   } else if (key === "minlength") {
  //     return "the username should contain at least 5 characters";
  //   } else if (key === "noDuplicate") {
  //     return "thers' two or more";
  //   } else if (key === "noupper") {
  //     return "gotta have uppercase";
  //   } else if (key === "noDuplicateEmail") {
  //     return "email more like e-fail lol";
  //   } else if ( key === "isValid") {
  //     return "racism";
  //   }
  //   return "";
  // }

  get username(){
    return this.userPanel.get("username");
  }
  get email(){
    return this.userPanel.get("email");
  }
  get password(){
    return this.userPanel.get("password");
  }
  get passwordConfirm(){
    return this.userPanel.get("passwordConfirm");
  }
  get userpanel(){
    return this.userPanel;
  }

  get errorsMag() : any{
    const arr = []
    for (let key in this.username?.errors) {
      arr.push(key)
    }
    return arr;
  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }
  

}
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}