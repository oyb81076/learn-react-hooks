import * as React from "react";
import { useReduxAction, useReduxState } from '../hooks';
import { RenderDisplay } from '../RenderDisplay';
import { decrAction, incrAction, setCounterFromTimerAction } from '../store/counterReducer';
import { ReduxState } from '../store/reducers';
function mapCounterState(state: ReduxState) { return state.counter; }
function mapCounterAction(dispatch: any) {
  return {
    incr() { dispatch(decrAction()) },
    decr() { dispatch(incrAction()) },
    setCounterFromTimer() { dispatch(setCounterFromTimerAction()) }
  }
}
export function CounterHandler() {
  const actions = useReduxAction(mapCounterAction)
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="CounterHandler" />
      <button onClick={actions.incr}>incr</button>
      <button onClick={actions.decr}>decr</button>
      <button onClick={actions.setCounterFromTimer}>set count from timer</button>
    </div>
  );
}

export function ReduxCounter() {
  const counter = useReduxState(mapCounterState);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="counterView" />
      <div>counter: {counter}</div>
    </div>
  );
}