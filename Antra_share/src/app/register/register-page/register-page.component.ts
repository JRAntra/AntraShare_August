import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  userPanel = this.fb.group({
    username: new FormControl('', [Validators.minLength(7)]),
    email: new FormControl('', [checkValidate(this.validateService)]),
    password: new FormControl(''),
    passwordConfirm: new FormControl(),
  });

  get password(): FormControl {
    return this.userPanel.get('password') as FormControl;
  }

  get username(): FormControl {
    return this.userPanel.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.userPanel.get('email') as FormControl;
  }

  ngOnInit(): void {}
}
