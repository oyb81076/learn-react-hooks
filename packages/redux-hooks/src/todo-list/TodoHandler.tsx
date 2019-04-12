import * as React from "react";
import { useMapDispatch, useMapState } from '../hooks';
import { filterNameSelector, filterStateSelector } from './selector';
import { FilterState, updateTodoFilterName, updateTodoFilterState } from './todoReducer';
function mapInputChange(dispatch: any) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodoFilterName(e.target.value));
  }
}
function FilterNameInput() {
  const value = useMapState(filterNameSelector);
  const onChange = useMapDispatch(mapInputChange);
  return <input value={value} onChange={onChange} />
}
function mapSelectChange(dispatch: any) {
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateTodoFilterState(parseInt(e.target.value, 10)));
  }
}
function FilterStateSelect() {
  const value = useMapState(filterStateSelector);
  const onChange = useMapDispatch(mapSelectChange);
  return (
    <select value={value} onChange={onChange}>
      <option value={FilterState.ALL}>ALL</option>
      <option value={FilterState.COMPLETED}>COMPLETED</option>
      <option value={FilterState.ACTIVE}>ACTIVE</option>
    </select>
  );
}
export function TodoHandler() {
  return (
    <div>
      <FilterNameInput />
      <FilterStateSelect />
    </div>
  )
}