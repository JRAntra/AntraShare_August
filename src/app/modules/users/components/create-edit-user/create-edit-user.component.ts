import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRequestInterface } from '../../types/userRequest.interface';
import { UserInterface } from '../../types/user.interface';
import {
    requestCreateUserAction,
    requestCreateUserClearAction,
    requestDistinctUserAction,
    requestUpdateUserAction,
} from 'src/app/store/actions';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, takeUntil, first } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    isUserAddedSelector,
    isLoadingDistinctUserSelector,
    isDistinctuserSelector,
} from 'src/app/store/selectors/users.selector';
import { UserRequestUpdateInterface } from '../../types/userRequestUpdate.interface';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-create-edit-user',
    templateUrl: './create-edit-user.component.html',
    styleUrls: ['./create-edit-user.component.scss'],
})
export class CreateEditUserComponent implements OnInit {
    form: FormGroup;
    isUserAdded$: Observable<UserInterface | null>;
    distinctUser$: Observable<UserInterface | null>;
    isLoadingDistinctUser$: Observable<boolean>;
    isEditing: boolean;
    id: number | null;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute
    ) {
        this.isEditing = false;
    }

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(params => {
            this.id = +params['id'] || null;
            if (this.id) {
                this.isEditing = true;
                this.store.dispatch(requestDistinctUserAction({ id: this.id }));
            }
        });

        this.initializeValues();
        this.getInitialUserValuesForm();
    }

    public get firstName() {
        return this.form.get('firstName');
    }

    public get lastName() {
        return this.form.get('lastName');
    }

    public get nickName() {
        return this.form.get('nickName');
    }

    public get email() {
        return this.form.get('email');
    }

    public get phone() {
        return this.form.get('phone');
    }

    public get country() {
        return this.form.get('country');
    }

    public get city() {
        return this.form.get('city');
    }

    initializeForm(userData: UserInterface): void {
        this.form = this.fb.group({
            firstName: [
                userData.firstName,
                [Validators.required, Validators.minLength(3)],
            ],
            lastName: [
                userData.lastName,
                [Validators.required, Validators.minLength(3)],
            ],
            nickName: [
                userData.nickName,
                [Validators.required, Validators.minLength(3)],
            ],
            email: [
                userData.email,
                [
                    Validators.required,
                    Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                ],
            ],
            phone: [userData.phone, Validators.required],
            userId: [{ value: userData.userId, disabled: true }],
            country: [
                userData.country,
                [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)],
            ],
            city: [userData.city, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
        });
    }

    initializeValues(): void {
        this.isUserAdded$ = this.store.pipe(select(isUserAddedSelector));
        this.isLoadingDistinctUser$ = this.store.pipe(select(isLoadingDistinctUserSelector));
        this.distinctUser$ = this.store.pipe(select(isDistinctuserSelector));
    }

    getInitialUserValuesForm(): void {
        if (this.isEditing) {
            this.distinctUser$
                .pipe(
                    takeUntil(this.destroy$)
                )
                .subscribe( user => {
                    if (user) {
                        const initialValuesForm = {
                            firstName: user?.firstName,
                            lastName: user?.lastName,
                            nickName: user?.nickName,
                            email: user?.email,
                            phone: user?.phone,
                            userId: user?.userId,
                            country: user?.country,
                            city: user?.city,
                        };
                        this.initializeForm(initialValuesForm);
                    }
                });
        } else {
            const initialValuesForm = {
                firstName: '',
                lastName: '',
                nickName: '',
                email: '',
                phone: '',
                userId: '',
                country: '',
                city: '',
            };
            this.initializeForm(initialValuesForm);
        }
    }

    onSubmit() {
        if (this.isEditing && this.id) {
            const request: UserRequestUpdateInterface = this.form.value;
            this.store.dispatch(requestUpdateUserAction({ updatedUser: request, id: this.id }));
            this.addSuccessAlert('updated');
        } else {
            const date = moment();
            let todayDate = date.format('MM/DD/YYYY');

            const request: UserRequestInterface = {
                ...this.form.value,
                userId: this.getUserId(),
                accountCreated: todayDate,
            };

            this.store.dispatch(requestCreateUserAction({ user: request }));
            this.addSuccessAlert('added');
        }
    }

    getUserId(length: number = 8): string {
        return `DEV${Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1))}`;
    }

    addSuccessAlert(message: string): void {
        this.isUserAdded$.pipe(takeUntil(this.destroy$)).subscribe(user => {
            if (user) {
                this.store.dispatch(requestCreateUserClearAction());
                this.snackBar.open(`User was ${message} successfully!`, '', {
                    duration: 2000,
                    verticalPosition: 'top',
                    panelClass: ['snackbar-success'],
                });
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
