import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) { 
    this.form=fb.group({
      username:['', Validators.required],
      
    })
  }

  ngOnInit(): void {
  }

}
