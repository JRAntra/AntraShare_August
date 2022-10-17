import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
// import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { UserProfile } from 'src/app/shared/models/userprofile';
import {noupper, nolower, nospecial, checkValidateEmail, checkPasswords, emailValidator, usernameValidator, confirmPasswordMatch} from 'src/app/shared/validators/register-validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})


export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  public yes = true;

  public confirmFail = false;

  public hasErrors = true;
  
  constructor(
    private router : Router,
    private fb: FormBuilder,
    // private validateServiceUser: ValidateLoginService,
    private validateServiceEmail: ValidateRegisterService
  ) { }

  userPanel = this.fb.group({
    username: new FormControl('',[
    Validators.required,
    // noDuplicate,
    // noupper,
    // checkValidateUser(this.validateServiceUser)
    ]),
    // email: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      // checkValidateEmail(this.validateServiceEmail)
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
  })
  ngOnInit(): void {
    // initialize user

  }
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

  // ripped from https://stackoverflow.com/questions/40680321/get-all-validation-errors-from-angular-2-formgroup
  getFormValidationErrors() {
    var hasErrors = false;
    Object.keys(this.userPanel.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.userPanel.get(key)?.errors!;
      if (controlErrors != null) {
        hasErrors = true;
        Object.keys(controlErrors).forEach(keyError => {
        //  console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
    return hasErrors;
  }

  onInput() {
    this.userPanel.controls["email"].setAsyncValidators(emailValidator.asyncValidateEmail(this.validateServiceEmail))
    // console.log(this.email?.errors);

    this.userPanel.controls["username"].setAsyncValidators(usernameValidator.asyncValiddateUsername(this.validateServiceEmail))

    this.userPanel.controls["passwordConfirm"].setValidators(
      confirmPasswordMatch.confirmPassword(this.userPanel.controls["password"] as FormControl)
    )

    // var userName = this.username?.value;

    if(this.getFormValidationErrors()) {

      this.hasErrors = true;
    } else {
      this.hasErrors = false;
    }

    // if (this.username?.errors) {
    //   console.log('errors in password');
    // } else {
    //   console.log('we good with password');
    // }

    // if (this.userPanel.controls["email"]){

    // }

    
    if (this.userPanel.errors?.['confirmFail']) {
      this.confirmFail = true;
    } else {
      this.confirmFail = false;
    }
    // console.log(this.confirmFail)
    // this.userPanel.controls["username"].setAsyncValidators(profileValidators.asyncValiddateName(this.validateServiceEmail))
    // console.log(this.userPanel.controls["username"].errors)
    // console.log(this.username?.errors);
  }

  onSubmitButtonClick() {
    console.log("lol button is enabled");
    const profile : UserProfile = {
      name: "hardCodedName",
      // userName: {text : this.userPanel.controls["username"].value},
      userName: this.username?.value!,
      userEmail: this.email?.value!,
      password: this.password?.value!,

      userRole: "user",
      age: 123,
      gender: "hardCodedGender",
      phone: 911,
      token: "hardCodedToken",
    }
    this.validateServiceEmail.registerUser(profile).subscribe(
      //TODO: handle response
      res => {console.log(res)}
    )
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