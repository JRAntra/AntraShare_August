import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const initTodolist = createAction('[TodoList] Initialize Todolist');

//* ~~~~~~~~~~~~~~~~~~ Load Todolist
export const loadTodos = createAction('[TodoList] Load Todolist');

export const loadTodosSuccess = createAction(
  '[TodoList] Load Todolist Successful',
  props<{ todolist: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[TodoList] Load Todolist Failure',
  props<{ errmsg: string }>()
);

//* ~~~~~~~~~~~~~~~~~~ Add Todo
export const addTodo = createAction(
  '[TodoList] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[TodoList] Add Todo Successful',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[TodoList] Add Todo Failure',
  props<{ errmsg: string }>()
);
