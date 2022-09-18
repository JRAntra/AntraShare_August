import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'newsfeed',
    loadChildren: () => import('./newsfeed/newsfeed.module').then(m => m.NewsFeedModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/my-profile-module').then(m => m.MyProfileModule)
  },
  {
    path:'settings',
    loadChildren: () => import('./settings-panel/settings.module').then(m => m.SettingsModule)
  },
  {
    path:'',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m =>m.RegisterModule)
  },
  {
    path:'*',
    loadChildren: () => import('./navbar/nav.module').then(m =>m.NavModule)
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
