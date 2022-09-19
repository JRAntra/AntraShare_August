import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin/admin.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
