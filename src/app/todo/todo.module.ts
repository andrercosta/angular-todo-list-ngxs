import { TodoRoutingModule } from './todo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './store/todo-state';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([TodoState]),
  ],
})
export class TodoModule {}
