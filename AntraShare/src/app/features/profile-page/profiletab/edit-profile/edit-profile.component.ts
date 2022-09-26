import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatenameService } from '../../services/validatename.service';
import { profileValidators } from '../../validators/profileValidators';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit{
  form: FormGroup = new FormGroup({
    ["username"]: new FormControl("Britney Spears", Validators.required),
    ["password"]: new FormControl("", Validators.required),
    ["confirmPassword"]: new FormControl(""),
    ["age"]: new FormControl(37),
    ["phone"]: new FormControl(8888888888, Validators.required),
  })

  constructor(private service: ValidatenameService) {}
  ngOnInit(): void {
    this.form.controls["password"].setValidators(profileValidators.validatePassword)
  }
  onUserNameInput(){
    this.form.controls["username"].setAsyncValidators(profileValidators.asyncValiddateName(this.service))
  }
  onPasswordInput(){
    this.form.controls["confirmPassword"].setValidators(
      profileValidators.confirmPassword(this.form.controls["password"] as FormControl)
    )
  }
  
}
