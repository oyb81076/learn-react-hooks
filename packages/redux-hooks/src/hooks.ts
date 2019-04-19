import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Action, ActionCreatorsMapObject, AnyAction, bindActionCreators, Dispatch, Store } from 'redux';
export const ReduxStoreContext = createContext<Store>({
  dispatch(){ throw new Error("<ReduxStoreContext.Provider> is required") },
  getState(){ throw new Error("<ReduxStoreContext.Provider> is required") },
  replaceReducer(){ throw new Error("<ReduxStoreContext.Provider> is required") },
  subscribe(){ throw new Error("<ReduxStoreContext.Provider> is required") }
});
export function useMapState<T, S = any>(
  mapState: (state: S) => T,
  isEquals?: (a: T, b: T) => boolean,
): T {
  const store = useContext(ReduxStoreContext);
  const [state, setState] = useState(() => mapState(store.getState()));
  const initMapState = useRef(mapState);
  useEffect(() => {
    let prevState = state;
    const equals = isEquals || strictEquals;
    if (initMapState.current !== mapState) {
      initMapState.current = mapState;
      subscription();
    }
    function subscription() {
      const nextState = mapState(store.getState());
      if (!equals(nextState, prevState)) {
        setState(prevState = nextState);
      }
    }
    return store.subscribe(subscription);
  }, [mapState, isEquals]);
  return state;
}

function strictEquals<T>(a: T, b: T) { return a === b; }
export function useMapDispatch<T, A extends Action = AnyAction>(mapDispatch: ((dispatch: Dispatch<A>) => T)): T;
export function useMapDispatch<T extends ActionCreatorsMapObject>(mapAction: T): T;
export function useMapDispatch(mapDispatch: any) {
  const store = useContext(ReduxStoreContext);
  return useMemo(() => {
    if (typeof mapDispatch === "function") {
      return mapDispatch(store.dispatch)
    } else {
      return bindActionCreators(mapDispatch, store.dispatch);
    }
  }, [store.dispatch, mapDispatch]);
}

export function useDispatch() {
  return useContext(ReduxStoreContext).dispatch;
}
