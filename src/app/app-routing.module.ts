import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',
    loadChildren:() => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/navbar/nav.module').then(m => m.NavModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'newsfeed',
    loadChildren: () => import('./features/newsfeed/newsfeed.module').then(m => m.NewsFeedModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/my-profile-module').then(m => m.MyProfileModule)
  },
  {
    path:'settings',
    loadChildren: () => import('./features/settings-panel/settings.module').then(m => m.SettingsModule)
  },
  {
    path:'register',
    loadChildren: () => import('./features/register/register.module').then(m =>m.RegisterModule)
  },
 
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m =>m.AdminModule)
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
