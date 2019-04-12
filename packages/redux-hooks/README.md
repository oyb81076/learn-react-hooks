# hooks.ts 源码
```ts
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Action, AnyAction, Dispatch, Store } from 'redux';
export const ReduxStoreContext = createContext<Store>(null as any);

export function useMapState<T, S = any>(mapState: (state: S) => T): T {
  const store = useContext(ReduxStoreContext);
  const [value, setValue] = useState(() => mapState(store.getState()));
  const initMapState = useRef(mapState);
  useEffect(() => {
    let prev = value;
    function subscription() {
      const next = mapState(store.getState());
      if (next !== prev) {
        setValue(prev = next);
      }
    }
    if (initMapState.current !== mapState) {
      initMapState.current = mapState;
      subscription();
    }
    return store.subscribe(subscription);
  }, [mapState]);
  return value;
}

export function useMapDispatch<T, A extends Action = AnyAction>(mapDispatch: ((dispatch: Dispatch<A>) => T)) {
  const store = useContext(ReduxStoreContext);
  return useMemo(() => mapDispatch(store.dispatch), [store.dispatch, mapDispatch]);
}

export function useDispatch() {
  return useContext(ReduxStoreContext).dispatch;
}
```
# 基本使用
## useMapState
```tsx
const mapState = (state) => state.timer;
function ReduxTimer() {
  const timer = useMapState(mapState);
  return (
    <div>
      <div>timer: {timer}</div>
    </div>
  )
}
```
## useMapDispatch
```tsx
const mapDispatch = (dispatch)=> dispatch(incr());
function View(){
  const onClick = useMapDispatch(mapDispatch);
  return <button onClick={onClick}>incr</button>
}
```
```tsx
const mapDispatch = (dispatch)=> ({
  incr: ()=> dispatch(incr()),
  decr: ()=> dispatch(decr()),
 };
function View(){
  const actions = useMapDispatch(mapDispatch);
  return (
    <>
      <button onClick={actions.incr}>incr</button>
      <button onClick={actions.decr}>decr</button>
    </>
  )
}
```
## useMapDispatch
```tsx
function View(){
  const dispatch = useDispatch();
  const onClick = useCallback(()=> { dispatch(incr()) }, [])
  return <button onClick={onClick}>incr</button>
}
```

## reselect
在 一般的库实现中, 采用的是 shadowEqual 来比较 mapState 结果是否发生改变
在这个这个hooks中, 放弃用 shadowEqual 来比较 前后的变化, 直接暴力使用 prevValue === nextValue 来比叫前后是否有变化
所以使用reselect作为 memorize 使用
### todoList 的例子
```tsx
const listSelector = (state)=>  state.todo.data;
const isActiveSelector = (state) => state.todo.isActive;
const filterListSelector = createSelector(
  [listSelector, isActiveSelector],
  ([list, isActive])=> list.filter(x=> x.isActive === isActive),
);
const mapState = reselect.createStructuredSelector({
  isActive: isActiveSelector,
  list: isActiveSelector,
})
function View(){
  const { isActive, list } = useMapState(mapState)
  // ...
}
```
### 调用参数的例子
```tsx
const listSelector = (state)=>  state.todo.data;
function View({ isActive }){
  const mapState = useMemo(()=> {
    return createSelector(
      [listSelector],
      (list)=> list.filter(x=> x.isActive === isActive),
    )
  }, [isActive]);
  const list = useMapState(mapState);
  // ....
}

```