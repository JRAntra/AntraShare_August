import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// material
import { MaterialModule } from './material.module';

// core
import { CoreModule } from './core/core.module'

// shared

// module
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';
import { HomepageModule } from './homepage/homepage.module';
import { SettingsModule } from './settings/settings.module';

import { HttpClientModule } from '@angular/common/http';

// services
// Add services to provider to all for component usage
// does the same func as Injectable
//import { NewsfeedStoryService } from './homepage/services/newsfeed-story.service';


@NgModule({
  declarations: [
    // app
    AppComponent,
    // shared
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // app
    AppRoutingModule,
    // material
    MaterialModule,

    //core
    CoreModule,
    
    // module
    AdminModule,
    HomepageModule,
    LoginModule,
    ProfileModule,
    RegisterModule,
    SettingsModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
