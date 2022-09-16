import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomErrorComponent } from './modules/core/components/custom-error/custom-error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'news-feed',
    loadChildren: () =>
      import('./modules/news-feed/news-feed.module').then(
        (m) => m.NewsFeedModule
      ),
  },
  {
    path: '**', component: CustomErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
