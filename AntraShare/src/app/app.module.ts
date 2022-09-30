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
import { AdminModule } from './features/admin/admin.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { ProfileModule } from './features/profile/profile.module';
import { HomepageModule } from './features/homepage/homepage.module';
import { SettingsModule } from './features/settings/settings.module';

// serve
import { HttpClientModule } from '@angular/common/http';
import { StorylistService } from './features/homepage/services/storylist.service';

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
