import * as React from "react";
import { createSelector } from "reselect";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapState } from '../hooks';
import { filterNameSelector, filterNameTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
const mapState = createSelector([filterNameSelector, filterNameTodoListSelector], (name, list) => {
  return { name, list }
})

export function FilterNameTodoList() {
  const { name, list } = useMapState(mapState);
  return (
    <>
      <RenderDisplay name="FilterNameTodoList" />
      <div>name: {name}</div>
      <TodoItemList data={list}/>
    </>
  );
}