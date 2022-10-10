import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { LikelistComponent } from './likelist/likelist.component';
import { Limit20Pipe } from './likelist/limit20.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LikelistComponent,
    Limit20Pipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LikelistComponent,
    Limit20Pipe
  ]
})
export class CoreModule { }
