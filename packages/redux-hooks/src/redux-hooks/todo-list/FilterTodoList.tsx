import * as React from "react";
import { createStructuredSelector } from "reselect";
import { useReduxState } from '../hooks';
import { RenderDisplay } from '../RenderDisplay';
import { filterNameSelector, filterStateSelector, filterTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
import { FilterState } from './todoReducer';
export const mapState = createStructuredSelector({
  list: filterTodoListSelector,
  name: filterNameSelector,
  state: filterStateSelector,
})

export function FilterTodoList() {
  const { state, name, list } = useReduxState(mapState);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="FilterStateTodoList" />
      <div>state: {FilterState[state]}, name: {name}</div>
      <TodoItemList data={list}/>
    </div>
  );
}