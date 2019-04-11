import * as React from "react";
import { createSelector } from "reselect";
import { useReduxState } from '../hooks';
import { RenderDisplay } from '../RenderDisplay';
import { filterNameSelector, filterNameTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
const mapState = createSelector([filterNameSelector, filterNameTodoListSelector], (name, list) => {
  return { name, list }
})

export function FilterNameTodoList() {
  const { name, list } = useReduxState(mapState);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="FilterNameTodoList" />
      <div>name: {name}</div>
      <TodoItemList data={list}/>
    </div>
  );
}