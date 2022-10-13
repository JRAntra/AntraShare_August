import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  path = 'todos';

  constructor(private readonly http: HttpClient) { }
}
