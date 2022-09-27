import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateDataService } from '../../shared/services/validate-data.service';
import { InputValidators } from '../../shared/validators/input-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  
  constructor(

    private router : Router, 
    private fb: FormBuilder, 
    private validateService: ValidateDataService

  ) {}
  
  userLoginPanel = this.fb.group({
    username: [
      null,
      Validators.required,
      InputValidators.usernameValidator(this.validateService)
    ],

    password: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
      ] 
    ],
  })

  ngOnInit(): void {
  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }

  get password(): FormControl {
    return this.userLoginPanel.get("password") as FormControl
  }

  get username(): FormControl {
    return this.userLoginPanel.get("username") as FormControl
  }

}


