import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.actions';

const todoState: TodoState = {
  todolist: [],
  errmsg: '',
};

export const todoReducer = createReducer(
  todoState,
  // on(TodoActions.initTodolist, (state) => {
  //   return state;
  // }),
  //* ~~~~~~~~~~ Load reducers
  on(TodoActions.loadTodosSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist: [...todolist].reverse(),
    };
  }),
  on(TodoActions.loadTodosFailure, (state, { errmsg }) => {
    return {
      ...state,
      errmsg,
    };
  }),
  //* ~~~~~~~~~~ add reducers
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    console.log(todo);
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),
  on(TodoActions.addTodoFailure, (state, { errmsg }) => {
    return {
      ...state,
      errmsg,
    };
  })
);
