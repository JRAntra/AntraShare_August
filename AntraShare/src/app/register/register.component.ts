import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../shared/validators/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
  }

  registerForm = this.fb.group( {
      username: [null, [
        Validators.required
      ]],
      email:[null,
        [
          
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

      ]],
    
    })

  get password(): FormControl {
    return this.registerForm.get("password") as FormControl
  }

  ngOnInit(): void {
    console.log(this.password?.errors)
  }

}
