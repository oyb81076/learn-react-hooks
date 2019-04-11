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
