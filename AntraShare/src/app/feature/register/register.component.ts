import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateDataService } from '../../shared/services/validate-data.service';
import { InputValidators } from '../../shared/validators/input-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  submitted = false
  success = '';

  constructor(
    private fb: FormBuilder,
    private validateService: ValidateDataService,
  ) {
  }

  registerForm = this.fb.group({
    username: [
      null,
      Validators.required,
      InputValidators.usernameValidator(this.validateService),
    ],
    email: [
      null,
      Validators.required,
      InputValidators.emailValidator(this.validateService)
    ],
    password: [
      null,
      [
        //More Validators will be needed!
        Validators.required,
        InputValidators.patternValidator(/\d/, { hasnumber: true }),
        InputValidators.patternValidator(/[A-Z]/, { hasuppercase: true }),
        InputValidators.patternValidator(/[a-z]/, { haslowercase: true }),
        InputValidators.patternValidator(/[!@#$%^&*()]/, { hasspecialchar: true }),
        Validators.minLength(8),
      ]
    ],
    confirmPassword: [
      null,
      Validators.required,
    ],
  }, {
    validator: InputValidators.matchValidator('password', 'confirmPassword')
  } as AbstractControlOptions
  )

  passwordHide = true;
  confirmPasswordHide = true;

  get email(): FormControl {
    return this.registerForm.get("email") as FormControl
  }

  get username(): FormControl {
    return this.registerForm.get("username") as FormControl
  }

  get password(): FormControl {
    return this.registerForm.get("password") as FormControl
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get("confirmPassword") as FormControl
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true

    if (this.registerForm.invalid) return

    this.success = JSON.stringify(this.registerForm.value)
  }

}
