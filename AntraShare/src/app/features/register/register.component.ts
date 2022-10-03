import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { ValidateDataService } from '../../shared/services/validate-data.service';
import { InputValidators } from '../../shared/validators/input-validator';
import { RegisterService } from './services/register.service';

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
    private registerService: RegisterService
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

    //this.success = JSON.stringify(this.registerForm.value)

    console.log(this.registerForm.value)
    const newUser: User = {
      userName: JSON.stringify(this.registerForm?.get('username')?.value),
      password: JSON.stringify(this.registerForm?.get('password')?.value),
      userEmail: JSON.stringify(this.registerForm?.get('email')?.value),
    }
    this.addUser(newUser)
  }

  addUser(user: User) {
    this.registerService.addUser(user).subscribe(data => {
      console.log(data)
    })
  }

}
