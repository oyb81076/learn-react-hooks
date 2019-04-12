import * as React from "react";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapDispatch } from '../hooks';
import { addAction, decrAction, incrAction } from './counterReducer';

function mapCounterAction(dispatch: any) {
  return {
    incr() { dispatch(incrAction()) },
    decr() { dispatch(decrAction()) },
    add(value: number) { dispatch(addAction(value)) },
  }
}
export function CounterHandler() {
  const actions = useMapDispatch(mapCounterAction)
  const add100 = React.useCallback(() => actions.add(100), [actions.add])
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="CounterHandler" />
      <button onClick={actions.incr}>incr</button>
      <button onClick={actions.decr}>decr</button>
      <button onClick={add100}>add 100 by thunk action</button>
    </div>
  );
}