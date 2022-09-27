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
import { AdminModule } from './feature/admin/admin.module';
import { LoginModule } from './feature/login/login.module';
import { RegisterModule } from './feature/register/register.module';
import { ProfileModule } from './feature/profile/profile.module';
import { HomepageModule } from './feature/homepage/homepage.module';
import { SettingsModule } from './feature/settings/settings.module';

// serve
import { HttpClientModule } from '@angular/common/http';
import { StorylistService } from './feature/homepage/services/storylist.service';

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
  providers: [
    StorylistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
