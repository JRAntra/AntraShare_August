import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/shared/models/LoginModel';
import { InputValidators } from 'src/app/shared/validators/input-validator';
import { ValidateDataService } from '../../shared/services/validate-data.service';
import { LoginService } from './login-service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  
  constructor(

    private router : Router, 
    private fb: FormBuilder, 
    private validateService: ValidateDataService,
    private loginService: LoginService,
  


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
   this.userLoginPanel.controls["username"].setAsyncValidators(InputValidators.usernameValidator(this.validateService))
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

  onLogin(){
    const user: LoginModel = {
      username: 'EegiiUnur',
      password: this.password.value,
      // userEmail: ''
    }
  
    this.loginService.letlogin(user).subscribe(res => {console.log(res)})
    // console.log( this.loginService.letlogin(user).subscribe(res => {console.log(res)}))

   
  }

}


