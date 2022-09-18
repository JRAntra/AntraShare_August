import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NavModule } from './features/navbar/nav.module';
import { MyProfileModule } from './features/profile/my-profile-module';
import { LoginModule } from './features/login/login.module';
import { AdminModule } from './features/admin/admin.module';
import { NewsFeedModule } from './features/newsfeed/newsfeed.module';
import { RegisterModule } from './features/register/register.module';
import { SettingsModule } from './features/settings-panel/settings.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';








@NgModule({
  declarations: [
    AppComponent,
 

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    CoreModule,
    NavModule,
    MyProfileModule,
    LoginModule,
    AdminModule,
    NewsFeedModule,
    RegisterModule,
    SettingsModule,
    HomeModule,
    SharedModule,
    NavModule,

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
