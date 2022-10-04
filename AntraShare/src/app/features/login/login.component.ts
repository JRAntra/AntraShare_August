import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
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
    const user: User = {
      userEmail: this.username.value,
      password: this.password.value
      // userEmail:this.userLoginPanel.get("username")!.value,
      // password: this.userLoginPanel.get("password")!.value,
      
    }
    // console.log(user)
    this.loginService.letlogin(user).subscribe(res => {console.log(res)})
    // console.log( this.loginService.letlogin(user).subscribe(res => {console.log(res)}))

   
  }

}


