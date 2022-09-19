import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageModule } from './features/login-page/login-page.module';
import { AdminPageModule } from './features/admin-page/admin-page.module';
import { HomepageModule } from './features/home-page/home-page.module';
import { ProfilePageModule } from './features/profile-page/profile-page.module';
import { RegisterPageModule } from './features/register-page/register-page.module';
import { SettingsPageModule } from './features/settings-page/settings-page.module';
import { StorylistService } from './features/home-page/services/storylist.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    CoreModule,
    LoginPageModule,
    HomepageModule,
    AdminPageModule,
    ProfilePageModule,
    RegisterPageModule,
    SettingsPageModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [StorylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
