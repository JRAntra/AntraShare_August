import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "settings",
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: "**", redirectTo: "redirectTo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
