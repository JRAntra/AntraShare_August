import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile /my-profile.component';
import { MyProfileModule } from './my-profile-module';
// import { MyProfileComponent } from './my-profile /my-profile.component';

const routes: Routes = [
  {path:'profile', component:MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }