import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

import { ProfileModule } from './profile/profile.module';
import { HomepageModule } from './homepage/homepage.module';
import { SettingsModule } from './settings/settings.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AdminModule,
    HomepageModule,
    LoginModule,
    ProfileModule,
    RegisterModule,
    SettingsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
