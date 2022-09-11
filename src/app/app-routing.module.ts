import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './myprofile/profile.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'news-feed', component:NewsFeedComponent},
  {path:'settings', component: SettingsComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
