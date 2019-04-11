# hooks.ts 
```ts
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Action, AnyAction, Dispatch, Store } from 'redux';
export const ReduxStoreContext = createContext<Store>(null as any);
export function useReduxState<T, S = any>(mapState: (state: S) => T): T {
  const store = useContext(ReduxStoreContext);
  const [value, setValue] = useState(() => mapState(store.getState()));
  useEffect(() => {
    let prev = value;
    return store.subscribe(() => {
      const next = mapState(store.getState());
      if (next !== prev) {
        setValue(prev = next);
      }
    });
  }, []);
  return value;
}

export function useReduxAction<T, A extends Action = AnyAction>(mapDispatch: ((dispatch: Dispatch<A>) => T)) {
  const store = useContext(ReduxStoreContext);
  return useMemo(() => mapDispatch(store.dispatch), [store.dispatch, mapDispatch]);
}

export function useReduxDispatch() {
  return useContext(ReduxStoreContext).dispatch;
}
```
# 基本使用
```tsx
import * as React from "react"
import { useReduxAction, useReduxDispatch, useReduxState } from '../hooks';
import { refreshTimerAction } from '../store/timerReducer';
const mapState = (state: any) => state.timer;
const mapDispatch = (dispatch: any) => dispatch(refreshTimerAction());
export function ReduxTimer1() {
  const timer = useReduxState(mapState);
  // useDispatchMap
  const refresh = useReduxAction(mapDispatch);
  return (
    <div>
      <div>timer: {timer}</div>
      <button onClick={refresh}>refresh</button>
    </div>
  )
}
export function ReduxTimer2() {
  const timer = useReduxState(mapState);
  // use dispatch
  const dispatch = useReduxDispatch();
  const refresh = React.useCallback(()=> dispatch(refreshTimerAction()),[]);
  return (
    <div>
      <div>timer: {timer}</div>
      <button onClick={refresh}>refresh</button>
    </div>
  )
}
```
# useReduxState 推荐搭配 reselect 一起使用
```tsx

const todosSelector = (state: ReduxState) => state.todo.todos;
const filterStateSelector = (state: ReduxState) => state.todo.filterState;
const filterNameSelector = (state: ReduxState) => state.todo.filterName;

const filterTodoListSelector = createSelector(
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

const mapState = createStructuredSelector({
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
```
