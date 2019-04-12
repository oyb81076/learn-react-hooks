import * as React from "react"
import { createStructuredSelector } from "reselect";
import { RenderDisplay } from '../components/RenderDisplay';
import { useDispatch, useMapState } from '../hooks';
import { ReduxState } from "../store/reducers";
import { incrAAndDoubleB } from './valuesReducer';
const selectA = (state: ReduxState) => state.values.a;
const selectB = (state: ReduxState) => state.values.b;


function TwiceUseState() {
  const a = useMapState(selectA);
  const b = useMapState(selectB);
  return (
    <div>
      <RenderDisplay name="TwiceUseState" />
      <div>a: {a} b: {b}</div>
    </div>
  );
}
const selector = createStructuredSelector({ a: selectA, b: selectB });
function UseReselector() {
  const { a, b } = useMapState(selector);
  return (
    <div>
      <RenderDisplay name="UseReselector" />
      <div>a: {a} b: {b}</div>
    </div>
  );
}

function Handler() {
  const dispatch = useDispatch();
  const onClick = React.useCallback(() => dispatch(incrAAndDoubleB()), []);
  return <button onClick={onClick}>Add</button>
}

export function Values() {
  return (
    <>
      <TwiceUseState />
      <UseReselector />
      <Handler />
    </>
  )
}