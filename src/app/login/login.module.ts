import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginUserPanelComponent } from './components/login-page/login-user-panel/login-user-panel.component';
import { LoginLogoPanelComponent } from './components/login-page/login-logo-panel/login-logo-panel.component';
import { NavModule } from '../navbar/nav.module';


@NgModule({
    declarations:[
       LoginPageComponent,
       LoginUserPanelComponent,
       LoginLogoPanelComponent
       
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