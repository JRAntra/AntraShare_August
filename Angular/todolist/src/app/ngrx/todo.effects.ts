import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Todo } from '../interfaces/todo.interface';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly path = 'todos';

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => {
        return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
          map((todolist: Todo[]) => {
            return TodoActions.loadTodosSuccess({ todolist });
          }),
          catchError((err) => {
            return of(TodoActions.loadTodosFailure({ errmsg: err }));
          })
        );
      })
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      switchMap((newtodo) => {
        return this.http
          .post<Todo>([this.baseUrl, this.path].join('/'), newtodo.todo)
          .pipe(
            map((todo: Todo) => {
              return TodoActions.addTodoSuccess({ todo });
            }),
            catchError((err) => {
              return of(TodoActions.addTodoFailure({ errmsg: err }));
            })
          );
      })
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
