import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../shared/service/validate.service';
import { checkPasswordValid, checkUserNameValid } from '../shared/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  
  constructor(

    private router : Router, 
    private fb: FormBuilder, 
    private service: ValidateService

  ) {}
  
  userLoginPanel = this.fb.group({
    username: new FormControl('',[
      Validators.required,
      checkUserNameValid(this.service),
      
    ]),

    password: new FormControl('',[
      Validators.minLength(8),
      Validators.required,
      checkPasswordValid,
    ]),


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


