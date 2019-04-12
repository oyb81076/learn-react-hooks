import * as React from "react";
import { RenderDisplay } from 'src/components/RenderDisplay';
import { useDispatch, useMapState } from 'src/hooks';
import { ReduxState } from 'src/store/reducers';
export function thunkDispatchReducer(state = 0, action: { type: "thunk_dispatch" }) {
  return action.type === "thunk_dispatch" ? state + 1 : state;
}
function thunkAction(): any {
  return (dis: any) => {
    dis({ type: "thunk_dispatch" })
    dis({ type: "thunk_dispatch" })
  }
}
function ThunkDispatchHandle(){
  const dispatch = useDispatch();
  const addOnce = React.useCallback(() => dispatch({ type: "thunk_dispatch" }), []);
  const addTwice = React.useCallback(() => {
    dispatch({ type: "thunk_dispatch" })
    dispatch({ type: "thunk_dispatch" })
  }, []);
  const useThunk = React.useCallback(() => {
    dispatch(thunkAction());
  }, []);
  const useFiber = React.useCallback(async () => {
    dispatch({ type: "thunk_dispatch" })
    await Promise.resolve();
    dispatch({ type: "thunk_dispatch" })
  }, []);
  return (
    <div>
      <button onClick={addOnce}>add once</button>
      <button onClick={addTwice}>add twice</button>
      <button onClick={useThunk}>thunk</button>
      <button onClick={useFiber}>fiber</button>
    </div>
  )
}
function mapState(x: ReduxState) { return x.thunkDispatch }
function ThunkDispatchView(){
  const r = useMapState(mapState);
  return (
    <>
      <RenderDisplay name="ThunkDispatchView"/>
      <div>{r}</div>
    </>
  )
}
export function ThunkDispatch() {
  return (
    <>
      <ThunkDispatchView />
      <ThunkDispatchHandle />
    </>
  )
}