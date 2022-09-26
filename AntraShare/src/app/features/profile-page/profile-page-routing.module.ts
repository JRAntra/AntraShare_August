import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiletabComponent } from './profiletab/profiletab.component';
const routes: Routes = [
  { path: '', component: ProfiletabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
