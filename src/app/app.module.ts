import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsFeedComponent } from './news-feed/news-feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { MyProfileComponent } from './my-profile /my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { CoreComponent } from './core/core.component';
import { ComponentsComponent } from './core/components/components.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    NavbarComponent,
    MyProfileComponent,
    SettingsComponent,
    CoreComponent,
    ComponentsComponent,
    FooterComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
