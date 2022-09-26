import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../shared/service/validate.service';

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
  
  userPanel = this.fb.group({
    username: new FormControl('',[
      Validators.required,
      
    ]),
    
    password: new FormControl('',[
      Validators.minLength(8),
      Validators.required,
    ])
  })

  ngOnInit(): void {
  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }

  get password(): FormControl {
    return this.userPanel.get("password") as FormControl
  }

  get username(): FormControl {
    return this.userPanel.get("username") as FormControl
  }

}


