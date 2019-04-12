import * as React from "react";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapAction, useMapDispatch } from '../hooks';
import { addAction, decrAction, incrAction } from './counterReducer';

function mapCounterAction(dispatch: any) {
  return {
    add(value: number) { dispatch(addAction(value)) },
  }
}
const mapAction = {
  decr: decrAction,
  incr: incrAction,
}
export function CounterHandler() {
  const actions = useMapDispatch(mapCounterAction)
  const { incr, decr } = useMapAction(mapAction);
  const add100 = React.useCallback(() => actions.add(100), [actions.add])
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="CounterHandler" />
      <button onClick={incr}>incr</button>
      <button onClick={decr}>decr</button>
      <button onClick={add100}>add 100 by thunk action</button>
    </div>
  );
}