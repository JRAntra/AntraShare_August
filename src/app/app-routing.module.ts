import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'newsfeed',
    loadChildren: () => import('./news-feed/newsfeedmodule').then(m => m.NewsFeedModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./my-profile /my-profile-module').then(m => m.MyProfileRoutingModule)
  },
  // {
  //   path: 'setting',
  //   // loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
