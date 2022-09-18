import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core.routing-module';
import { NavModule } from '../features/navbar/nav.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NavModule,
   
  ],
  exports:[
  
  ]
})
export class CoreModule { }