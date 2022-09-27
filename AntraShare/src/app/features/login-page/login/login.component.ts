import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkValidate } from 'src/app/shared/validators/checkUsername';
import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private service: ValidateLoginService,
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ],[
      checkValidate(this.service)
    ]),
    password: new FormControl('',[
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.required,
    ])
  })

  ngOnInit(): void {
    
    this.setLimitForChange()

    this.form.controls["username"].setAsyncValidators(checkValidate(this.service))
  
  

  }

  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }

  get password(): FormControl {
    return this.form.get("password") as FormControl
  }

  get username(): FormControl {
    return this.form.get("username") as FormControl
  }



 setLimitForChange(){
  this.username.valueChanges.pipe(
    debounceTime(1000)
  ).subscribe(res => console.log(res))
 }


  

}
