import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './feature/homepage/homepage.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "login",
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "settings",
    loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule)
  },
  { path: "**", redirectTo: "redirectTo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
