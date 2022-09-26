import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../shared/service/validate.service';
import { CheckValuesMatch, checkPasswordValid, checkUserNameValid } from '../shared/validators/validtors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: ValidateService) { 
    
  }

  userProfilePanel = this.fb.group({
    userName: new FormControl('', [
      Validators.required,
      checkUserNameValid(this.service),
    ]),
    userEmail: new FormControl(''),
    userAge: new FormControl(''),
    userGender: new FormControl(''),
    userPassword: new FormControl('', [
      checkPasswordValid,
    ]),
    userConfirmPassword: new FormControl('')
  }, {
    validators: CheckValuesMatch('userPassword', 'userConfirmPassword')
  } as AbstractControlOptions)

  passwordHide = true;
  confirmPasswordHide = true;

  ngOnInit(): void {
  }

  get userName(): FormControl {
    return this.userProfilePanel.get("userName") as FormControl
  }

  get userPassword(): FormControl {
    return this.userProfilePanel.get("userPassword") as FormControl
  }

  get userConfirmPassword(): FormControl {
    return this.userProfilePanel.get("userConfirmPassword") as FormControl
  }
}
