import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import { UserRequestInterface } from '../types/userRequest.interface';
import { UserRequestUpdateInterface } from '../types/userRequestUpdate.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<UserInterface[]> {
        const url = environment.apiUrl + '/teams';
        return this.http.get<UserInterface[]>(`${url}`);
    }

    createUser(user: UserRequestInterface): Observable<UserInterface> {
        const url = environment.apiUrl + '/teams';
        return this.http.post<UserInterface>(`${url}`, user);
    }

    getUserById(id: number): Observable<UserInterface> {
        const url = environment.apiUrl + '/teams';
        return this.http.get<UserInterface>(`${url}/${id}`);
    }

    updateUser(user: UserRequestUpdateInterface, id: number): Observable<UserInterface> {
        const url = environment.apiUrl + '/teams';
        return this.http.patch<UserInterface>(`${url}/${id}`, user);
    }
}
