import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component';
import { NgxMaskModule } from 'ngx-mask';

const routes = [
    {
        path: '',
        component: UsersComponent,
    },
    {
        path: 'create',
        component: CreateEditUserComponent,
    },
    {
        path: 'edit/:id',
        component: CreateEditUserComponent,
    },
];

@NgModule({
    declarations: [UsersComponent, CreateEditUserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        NgxMaskModule.forRoot({
            showMaskTyped: true,
            validation: true,
        }),
    ],
})
export class UsersModule {}
