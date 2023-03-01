import { TodoSelectors } from './../store/todo-selectors';
import { AddItemAction, ToggletemAction } from '../store/todo-actions';
import { Todo } from './../types/todo';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Select(TodoSelectors.todoItems) todos$!: Observable<Todo[]>;

  itemName: string = '';

  constructor(private store: Store) {}

  toggleItem(item: Todo) {
    this.store.dispatch(new ToggletemAction(item.name));
  }
  addItem() {
    this.store.dispatch(new AddItemAction(this.itemName));
    this.itemName = '';
  }
}
