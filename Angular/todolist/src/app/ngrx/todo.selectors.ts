import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';

const selectTodo = createFeatureSelector<TodoState>('todos');

export const getTodoList = createSelector(
  selectTodo,
  (state: TodoState) => state.todolist
);
