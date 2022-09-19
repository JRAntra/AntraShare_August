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

import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './register/register.module';

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
    HttpClientModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
