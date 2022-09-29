import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  obj = {
    age: 0,
  };

  ageOfUser = 1;
  phoneOfUser = 9237173195;

  ngOnInit(): void {}

  // changeThis(age: string) {
  //   this.ageOfUser = Number('age');
  //   this.obj.age = Number('age');
  //   this.phoneOfUser = Number('pNumber');
  // }

  constructor(private fb: FormBuilder) {}

  //validators for the input requirements
  userPanel = this.fb.group({
    username: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(8),
    ]),
    email: new FormControl('', [Validators.minLength(3), Validators.required]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    gender: new FormControl('', [Validators.minLength(4), Validators.required]),
    age: new FormControl('', [Validators.minLength(1), Validators.required]),
    phone: new FormControl('', [Validators.maxLength(10), Validators.required]),
  });

  // onInput() {
  //   Object.entries(this.username?.errors);
  // }

  showErrorUsername(key: string): string {
    if (key === 'required') return 'the username is required';
    else if (key === 'minlength') {
      return 'the username is too short';
    } else if (key === 'maxlength') {
      return 'the username is too long';
    }

    return '';
  }

  showErrorPassword(key: string): string {
    if (key === 'required') return 'The password is required';
    else if (key === 'minlength') {
      return 'the password is too short';
    }

    return '';
  }

  showErrorGender(key: string): string {
    if (key === 'required') return 'Requires a gender';
    else if (key === 'minlength') {
      return "please follow the placeholder's format";
    }

    return '';
  }
  get gender() {
    return this.userPanel.get('gender');
  }
  get password() {
    return this.userPanel.get('password');
  }
  get username() {
    return this.userPanel.get('username');
  }

  get errorsMsgUser(): any {
    const arr = [];
    for (let key in this.username?.errors) {
      arr.push(key);
    }

    return arr;
  }

  get errorsMsgPassword(): any {
    const arr = [];
    for (let key in this.password?.errors) {
      arr.push(key);
    }

    return arr;
  }

  get errorsMsgGender(): any {
    const arr = [];
    for (let key in this.gender?.errors) {
      arr.push(key);
    }

    return arr;
  }
}
