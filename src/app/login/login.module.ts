import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';





@NgModule({
    declarations:[
       LoginPageComponent
    ],
    imports:[
       

        LoginRoutingModule,
        
      
    ],
    exports:[
        
    ]
})
export class LoginModule{}