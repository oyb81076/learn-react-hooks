import * as React from "react";
import { RenderDisplay } from '../components/RenderDisplay';
import { CreateTodo } from './CreateTodo';
import { FilterNameTodoList } from './FilterNameTodoList';
import { FilterStateTodoList } from './FilterStateTodoList';
import { FilterTodoList } from './FilterTodoList';
import { TodoHandler } from './TodoHandler';

export function TodoList() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: 60 }}>
        <RenderDisplay name="Todo" />
        <CreateTodo />
        <TodoHandler />
      </div>
      <div style={{flex: 1}}>
        <h3>Filter State</h3>
        <FilterStateTodoList />
      </div>
      <div style={{flex: 1}}>
        <h3>Filter Name</h3>
      <FilterNameTodoList />
      </div>
      <div style={{ flex: 1 }}>
        <h3>Filter All</h3>
        <FilterTodoList />
      </div>
    </div>
  )
}