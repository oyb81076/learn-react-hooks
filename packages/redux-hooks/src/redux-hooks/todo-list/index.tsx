import * as React from "react";
import { RenderDisplay } from '../RenderDisplay';
import { CreateTodo } from './CreateTodo';
import { FilterNameTodoList } from './FilterNameTodoList';
import { FilterStateTodoList } from './FilterStateTodoList';
import { FilterTodoList } from './FilterTodoList';
import { TodoHandler } from './TodoHandler';

export function TodoList() {
  return (
    <div>
      <RenderDisplay name="Todo" />
      <CreateTodo />
      <TodoHandler />
      <FilterStateTodoList />
      <FilterNameTodoList />
      <FilterTodoList />
    </div>
  )
}