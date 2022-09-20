import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    declarations:[
       LoginPageComponent,
      
       
    ],
    imports:[
        CommonModule,
        LoginRoutingModule,
       
    ],
    exports:[
        
    ]
})
export class LoginModule{}