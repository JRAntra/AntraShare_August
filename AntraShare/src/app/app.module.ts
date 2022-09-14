import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// material
import { MaterialModule } from './material.module';

// core

// shared
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

// module
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';
import { HomepageModule } from './homepage/homepage.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    // app
    AppComponent,
    // shared
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // app
    AppRoutingModule,
    // material
    MaterialModule,
    // module
    AdminModule,
    HomepageModule,
    LoginModule,
    ProfileModule,
    RegisterModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
