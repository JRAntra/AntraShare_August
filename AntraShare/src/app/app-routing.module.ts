import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './features/profile-page/profile/profile.component';
import { LoginComponent } from './features/login-page/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SettingsComponent } from './features/settings-page/settings/settings.component';
import { RegisterComponent } from './features/register-page/register/register.component';
const routes: Routes = [
  { path: '', component: LoginComponent
  },
  {path: 'navbar', component: NavbarComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
