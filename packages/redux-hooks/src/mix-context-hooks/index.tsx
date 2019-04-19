import * as React from "react"
import { createContext } from "react";
import { RenderDisplay } from 'src/components/RenderDisplay';
import { ReduxStoreContext, useMapDispatch, useMapState } from 'src/hooks';
import { ReduxState } from 'src/store/reducers';
export function mixContextHooksReducer(state = 0, action: { type: "add_mix_context_hooks" }) {
  return action.type === "add_mix_context_hooks" ? state + 1 : state;
}
const Context = createContext({ times: 0, value: 0 });
const mapState = (state: ReduxState) => state.mixContextHooks;
function Provider({ children, times }: { children?: React.ReactNode, times: number }) {
  const state = useMapState(mapState); // this is fast
  const value = React.useMemo(() => ({ times, value: state * times }), [state, times]);
  return (
    <Context.Provider value={value}>
      <RenderDisplay name="Provider" />
      {children}
    </Context.Provider>
  )
}
const mapDispatch = (dispatch: any) => () => dispatch({ type: "add_mix_context_hooks" });
function Handle() {
  const onClick = useMapDispatch(mapDispatch);
  return <button onClick={onClick}>incr</button>
}
function DisplayOnly(){
  const state = useMapState(mapState); // this is fast
  return (
    <div>
      <RenderDisplay name="DisplayOnly" />
      <div>{state}</div>
    </div>
  )
}
function ContextAndMapState(){
  const state = useMapState(mapState); // this is fast
  const { times, value } = React.useContext(Context);
  return (
    <div>
      <RenderDisplay name="ContextAndMapState" />
      <div>{state} x {times} = {value}</div>
    </div>
  )
}
function Reactoin() {
  const store = React.useContext(ReduxStoreContext);
  React.useEffect(() => {
    function sub() {
      const state: ReduxState = store.getState();
      if (state.mixContextHooks % 2 === 1) {
        store.dispatch({ type: "add_mix_context_hooks" })
      }
    }
    sub();
    return store.subscribe(sub);
  }, []);
  return null;
}
export function MixContextHooks() {
  return (
    <>
      <Reactoin />
      <Provider times={2}>
        <RenderDisplay name="MixContextHooks" />
        <Handle />
        <ContextAndMapState />
        <DisplayOnly />
      </Provider>
    </>
  )
}