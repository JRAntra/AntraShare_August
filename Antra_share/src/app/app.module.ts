import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AfterloginModule } from './afterlogin/afterlogin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { NewsfeedService } from './shared/services/newsfeed.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminguardService } from './shared/services/adminguard.service';
import { LocalService } from './shared/services/local.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AfterloginModule,
    CoreModule,
    LoginModule,
    ProfileModule,
    SettingModule,
    RegisterModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatFormFieldModule,

    MatSliderModule,
  ],
  providers: [NewsfeedService, AdminguardService, LocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
