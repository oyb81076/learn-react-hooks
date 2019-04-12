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
