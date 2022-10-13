import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo: Todo = {
    title: '',
    userId: 6,
    completed: false
  }
  todolist: any = []

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {}

  deleteTodo(id: string) {}

}
