import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
import { AdminComponent } from './admin/admin/admin.component';
import { SettingsPageComponent } from './setting/settings-page/settings-page.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';*/

// LAZY LOADING for all the paths

const routes: Routes = [
  {
    path: 'newsfeed',
    //component: AfterloginComponent
    loadChildren: () =>
      import('./afterlogin/afterlogin.module').then((m) => m.AfterloginModule),
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),

    // path: 'admin',
    // component: AdminComponent,
    //loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    // path: 'settings',
    // component: SettingsPageComponent,
    path: 'settings',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    // path: 'profile',
    // component: ProfileComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),

    // path: 'login',
    // component: LoginComponent,
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),

    // path: 'register',
    // component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
