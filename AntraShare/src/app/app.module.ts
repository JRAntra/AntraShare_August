import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';

import { ProfileModule } from './profile/profile.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PostStoryComponent } from './homepage/post-story/post-story.component';
import { StoryComponent } from './homepage/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    HomepageComponent,
    PostStoryComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
