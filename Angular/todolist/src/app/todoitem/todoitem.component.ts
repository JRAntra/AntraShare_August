import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {
  @Input('item') todo!: Todo;
  @Output() triggerDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {}
}
