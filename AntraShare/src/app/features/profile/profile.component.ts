import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidateDataService } from '../../shared/services/validate-data.service';

import { InputValidators } from '../../shared/validators/input-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private validateService: ValidateDataService
  ) {
  }

  userProfilePanel = this.fb.group({
    userName: [
      null,
      Validators.required,
      InputValidators.usernameValidator(this.validateService)
    ],
    userEmail: [
      null,
      Validators.required,
      InputValidators.emailValidator(this.validateService)
    ],
    userAge: [
      null,
    ],
    userGender: [
      null,
    ],
    userPassword: [
      null,
      [
        Validators.required,
        InputValidators.patternValidator(/\d/, { hasnumber: true }),
        InputValidators.patternValidator(/[A-Z]/, { hasuppercase: true }),
        InputValidators.patternValidator(/[a-z]/, { haslowercase: true }),
        InputValidators.patternValidator(/[!@#$%^&*()]/, { hasspecialchar: true }),
        Validators.minLength(8),
      ]
    ],
    userConfirmPassword: [
      null, 
      Validators.required,
    ]
  }, {
    validators: InputValidators.matchValidator('userPassword', 'userConfirmPassword')
  } as AbstractControlOptions)

  passwordHide = true;
  confirmPasswordHide = true;

  ngOnInit(): void {
    //this.ar.paramMap.subscribe( res => console.log(res.get('username')))
    this.ar.snapshot.paramMap.get('username')
  }

  get userName(): FormControl {
    return this.userProfilePanel.get("userName") as FormControl
  }

  get userEmail(): FormControl {
    return this.userProfilePanel.get("userEmail") as FormControl
  }

  get userPassword(): FormControl {
    return this.userProfilePanel.get("userPassword") as FormControl
  }

  get userConfirmPassword(): FormControl {
    return this.userProfilePanel.get("userConfirmPassword") as FormControl
  }
}
