import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "login",
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "settings",
    loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate:[AdminGuard]
  },
  { path: "**", redirectTo: "redirectTo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
