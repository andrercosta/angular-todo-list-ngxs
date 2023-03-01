import { Selector } from '@ngxs/store';
import { Todo } from './../types/todo';
import { TodoState, TodoStateModel } from './todo-state';
export class TodoSelectors {
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): Todo[] {
    return state.todos;
  }
}
