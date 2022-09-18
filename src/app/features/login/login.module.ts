import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { NavModule } from '../navbar/nav.module';


@NgModule({
    declarations:[
       LoginPageComponent,
      
       
    ],
    imports:[
        CommonModule,
        LoginRoutingModule,
        NavModule
    ],
    exports:[
        
    ]
})
export class LoginModule{}