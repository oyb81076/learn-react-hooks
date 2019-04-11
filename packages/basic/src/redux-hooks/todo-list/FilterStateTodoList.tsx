import * as React from "react";
import { createSelector } from "reselect";
import { useReduxState } from '../hooks';
import { RenderDisplay } from '../RenderDisplay';
import { filterStateSelector, filterStateTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
import { FilterState } from './todoReducer';
const mapState = createSelector([filterStateSelector, filterStateTodoListSelector], (state, list) => {
  return { state, list }
})

export function FilterStateTodoList() {
  const { state, list } = useReduxState(mapState);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="FilterStateTodoList" />
      <div>state: {FilterState[state]}</div>
      <TodoItemList data={list}/>
    </div>
  );
}