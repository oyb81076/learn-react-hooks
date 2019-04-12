import * as React from "react";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapDispatch } from '../hooks';
import { addAction, decrAction, incrAction } from './counterReducer';

function mapCounterAction(dispatch: any) {
  return {
    add(value: number) { dispatch(addAction(value)) },
  }
}
function mapAdd200(dispatch: any){
  return ()=> dispatch(addAction(200));
}
const mapAction = {
  decr: decrAction,
  incr: incrAction,
}
export function CounterHandler() {
  const { add } = useMapDispatch(mapCounterAction)
  const { incr, decr } = useMapDispatch(mapAction);
  const add100 = React.useCallback(() => add(100), [add])
  const add200 = useMapDispatch(mapAdd200);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="CounterHandler" />
      <button onClick={incr}>incr</button>
      <button onClick={decr}>decr</button>
      <button onClick={add100}>add 100 by thunk action</button>
      <button onClick={add200}>add 200 by useMapDispatch((dispatch)=> ()=> dispatch(add(200)))</button>
    </div>
  );
}