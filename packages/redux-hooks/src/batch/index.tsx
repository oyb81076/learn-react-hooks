import * as React from "react";
import { batch } from "redux-batch-action";
import { RenderDisplay } from 'src/components/RenderDisplay';
import { ReduxStoreContext, useMapState } from 'src/hooks';
import { ReduxState } from 'src/store/reducers';
export function batchReducer(state = 0, action: { type: "batch_incr" }) {
  if (action.type === "batch_incr") { return state + 1; }
  return state;
}


function subscribeReducer(count: number, action: { type: "incr" }){
  return action.type === "incr" ? count + 1 : count;
}
const mapState = (state: ReduxState) => state.batch;
export function Batch() {
  const [state, dispatch] = React.useReducer(subscribeReducer, 0);
  const store = React.useContext(ReduxStoreContext);
  const value = useMapState(mapState);
  React.useEffect(()=> {
    return store.subscribe(()=> {
      dispatch({ type: "incr" });
    })
  }, []);
  // store.dispatch === useDispatch();
  const batchDispatch = React.useCallback(()=> {
    batch(() => {
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
    })
  }, []);
  const notBatchDispatch = React.useCallback(() => {
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
      store.dispatch({ type: "batch_incr" });
  }, []);
  
  return (
    <>
      <RenderDisplay name="Batch"/>
      <div>subscribe count: {state}</div>
      <div>store.batch: {value}</div>
      <div>
        <button onClick={batchDispatch}>batch subscribe</button>
        <button onClick={notBatchDispatch}>not batch subscribe</button>
      </div>
    </>
  );
}