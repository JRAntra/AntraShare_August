import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfilePageModule } from './profile-page/profile-page.module';
import { CoreModule } from './core/core.module';
import { PowerModule } from './power/power.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfilePageModule,
    HomepageModule,
    CoreModule,
    PowerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
