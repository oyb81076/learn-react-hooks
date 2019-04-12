import { createSelector } from 'reselect';
import { ReduxState } from '../store/reducers';
import { FilterState } from './todoReducer';
export const todosSelector = (state: ReduxState) => state.todo.todos;
export const filterStateSelector = (state: ReduxState) => state.todo.filterState;
export const filterNameSelector = (state: ReduxState) => state.todo.filterName;

export const filterStateTodoListSelector = createSelector(
  [todosSelector, filterStateSelector],
  (todos, state) => {
    switch (state) {
      case FilterState.ALL: return todos;
      case FilterState.ACTIVE: return todos.filter(x => !x.completed)
      case FilterState.COMPLETED: return todos.filter(x => x.completed)
    }
  }
);

export const filterNameTodoListSelector = createSelector(
  [todosSelector, filterNameSelector],
  (todos, filterName) => {
    if (!filterName) { return todos; }
    return todos.filter(x => x.name.indexOf(filterName) !== -1)
  }
);

export const filterTodoListSelector = createSelector(
  [todosSelector, filterNameSelector, filterStateSelector],
  (todos, filterName, state) => {
    switch (state) {
      case FilterState.ALL:
        break;
      case FilterState.ACTIVE:
        todos = todos.filter(x => !x.completed)
        break;
      case FilterState.COMPLETED:
        todos = todos.filter(x => x.completed)
        break;
    }
    if (!filterName) { return todos; }
    return todos.filter(x => x.name.indexOf(filterName) !== -1)
  }
)