import * as React from "react";
import { RenderDisplay } from '../components/RenderDisplay';
import { useMapState } from '../hooks';
import { ReduxState } from '../store/reducers';
function mapCounterState(state: ReduxState) { return state.counter; }

export function CounterView() {
  const counter = useMapState(mapCounterState);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="counterView" />
      <div>counter: {counter}</div>
    </div>
  );
}