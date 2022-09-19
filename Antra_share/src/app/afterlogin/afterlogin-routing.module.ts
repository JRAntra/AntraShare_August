import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

const routes: Routes = [
  {
    path: '',
    component: AfterloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterloginRoutingModule { }
