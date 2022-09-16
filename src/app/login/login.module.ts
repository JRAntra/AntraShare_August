import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    declarations:[
        LoginPageComponent,
        RegisterPageComponent
    ],
    imports:[
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        LoginPageComponent,
        RegisterPageComponent
    ],
    exports:[
        LoginPageComponent,
        RegisterPageComponent
    ]
})
export class LoginModule{}