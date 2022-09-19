import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginPageComponent } from './afterlogin-page/afterlogin-page.component';

const routes: Routes = [{ path: '', component: AfterloginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterloginRoutingModule {}
