import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MyProfileModule } from './profile/my-profile-module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginModule } from './login/login.module';
import { NavModule } from './navbar/nav.module';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminModule } from './admin/admin.module';
import { MyProfileComponent } from './profile/my-profile /my-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyProfileComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    CoreModule,
    MyProfileModule,
    LoginModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
