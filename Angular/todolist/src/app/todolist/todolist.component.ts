import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../interfaces/todo.interface';
import * as TodoSelectors from '../ngrx/todo.selectors';
import * as TodoActions from '../ngrx/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todo: Todo = {
    title: '',
    userId: 6,
    completed: false,
  };
  todolist$!: Observable<Todo[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);

    this.store.dispatch(TodoActions.loadTodos());
  }

  onChange() {
    this.store.dispatch(TodoActions.addTodo({ todo: { ...this.todo } }));
  }

  deleteTodo(id: string) {}
}

/* {
   todos: {
     todolist: []
   },
   produces: {
     productlist: []
   }
  }
*/
