import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { MyProfileRoutingModule } from './my-profile-routing.module';
import {MatCardModule} from '@angular/material/card';
import { MyProfileComponent } from './my-profile /my-profile.component';


@NgModule({
  declarations:[
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatCardModule,
  ],

  
})
export class MyProfileModule { }