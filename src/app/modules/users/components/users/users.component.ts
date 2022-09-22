import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map, Subject, takeUntil } from 'rxjs';
import { UserInterface } from 'src/app/modules/users/types/user.interface';
import { isLoadingUsersSelector, usersSelector } from 'src/app/store/selectors';
import { requestGetUsersAction } from 'src/app/store/actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
    isLoading$: Observable<boolean>;
    users$: Observable<UserInterface[] | null>;
    searchInput: string;
    dataSource = new MatTableDataSource<UserInterface>([]);

    @ViewChild('searchInputFocus', { static: true }) searchInputFocus: ElementRef<HTMLInputElement>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;
    destroy$: Subject<boolean> = new Subject<boolean>();

    displayedColumns: string[] = ['name', 'userId', 'phoneNumber', 'email', 'accountCreated', 'editUser'];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    ngAfterViewInit() {}

    initializeValues(): void {
        this.fetchUsers();
        this.isLoading$ = this.store.pipe(select(isLoadingUsersSelector));
        this.users$ = this.store.pipe(select(usersSelector));
        this.getInitialPaginatorUsers();
    }

    fetchUsers() {
        this.store.dispatch(requestGetUsersAction());
    }

    getInitialPaginatorUsers(): void {
        this.users$
            .pipe(
                map(users => {
                    this.dataSource.data = users as UserInterface[];
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        const checkOfValue = this.dataSource.data.some(
            user =>
                user.firstName.toLocaleLowerCase().includes(filterValue) ||
                user.lastName.toLocaleLowerCase().includes(filterValue)
        );
        if (checkOfValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        }
    }

    onFocus() {
        this.searchInputFocus.nativeElement.focus();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
