import * as React from "react";
import { createStructuredSelector } from "reselect";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapState } from '../hooks';
import { filterNameSelector, filterStateSelector, filterTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
import { FilterState } from './todoReducer';
export const mapState = createStructuredSelector({
  list: filterTodoListSelector,
  name: filterNameSelector,
  state: filterStateSelector,
})

export function FilterTodoList() {
  const { state, name, list } = useMapState(mapState);
  return (
    <>
      <RenderDisplay name="FilterStateTodoList" />
      <div>state: {FilterState[state]}, name: {name}</div>
      <TodoItemList data={list}/>
    </>
  );
}