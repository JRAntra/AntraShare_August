import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateDataService } from '../shared/services/validate-data.service';
import { RegisterValidators } from '../shared/validators/register';

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

  registerForm = this.fb.group( {
      username: [null, [
        Validators.required,
        RegisterValidators.usernameValidator(this.validateService)
      ]],
      email:[null,
        [
        RegisterValidators.emailValidator(this.validateService)
        ]],
      password: [null, [
        //More Validators will be needed!
        Validators.required, 
        RegisterValidators.patternValidator(/\d/, {hasnumber: true}),
        RegisterValidators.patternValidator(/\[A-Z]/, {hasuppercase: true}),
        RegisterValidators.patternValidator(/\[a-z]/, {haslowercase: true}),
        RegisterValidators.patternValidator(/\[!@#$%^&*()]/, {hasspecialchar: true}),
        Validators.minLength(8),
      ]],
      confirmPassword: [null, [
        Validators.required,
      ]],
    
    },
      RegisterValidators.matchValidator('password','confirmPassword')
    )

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
  

  onInput() {
    console.log(this.username)
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true
    
    if(this.registerForm.invalid) return

    this.success = JSON.stringify(this.registerForm.value)
  }

}
