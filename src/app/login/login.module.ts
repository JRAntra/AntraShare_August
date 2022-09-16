import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';


import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    declarations:[
       LoginPageComponent
    ],
    imports:[
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,

        LoginRoutingModule,
        
      
    ],
    exports:[
        
    ]
})
export class LoginModule{}