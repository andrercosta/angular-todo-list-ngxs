import { AddItemAction, ToggletemAction } from './todo-actions';
import { Todo } from '../types/todo';
import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddItemAction)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddItemAction) {
    const { name } = action;
    if (!name) {
      return;
    }
    const state = ctx.getState();

    const tododItem: Todo = {
      name,
      done: false,
    };

    ctx.setState({
      ...state,
      todos: [...state.todos, tododItem],
    });
  }

  @Action(ToggletemAction)
  toggleItem(ctx: StateContext<TodoStateModel>, action: ToggletemAction) {
    const state = ctx.getState();

    const newTodoItems = state.todos.map((item) => {
      if (item.name === action.name) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });

    ctx.setState({
      ...state,
      todos: [...newTodoItems],
    });
  }
}
