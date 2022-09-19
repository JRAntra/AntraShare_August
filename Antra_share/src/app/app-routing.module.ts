import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';
import { SettingsPageComponent } from './setting/settings-page/settings-page.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    //component: AfterloginComponent
    loadChildren: () => import('./afterlogin/afterlogin.module').then(m => m.AfterloginModule),
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
    //loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
