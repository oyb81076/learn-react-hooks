import * as React from "react";
import { createSelector } from "reselect";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapState } from '../hooks';
import { filterStateSelector, filterStateTodoListSelector } from './selector';
import { TodoItemList } from './TodoItem';
import { FilterState } from './todoReducer';
const mapState = createSelector([filterStateSelector, filterStateTodoListSelector], (state, list) => {
  return { state, list }
})

export function FilterStateTodoList() {
  const { state, list } = useMapState(mapState);
  return (
    <>
      <RenderDisplay name="FilterStateTodoList" />
      <div>state: {FilterState[state]}</div>
      <TodoItemList data={list}/>
    </>
  );
}