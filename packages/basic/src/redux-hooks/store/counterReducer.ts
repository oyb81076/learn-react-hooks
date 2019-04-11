import { ThunkAction } from "redux-thunk";
import { ReduxAction, ReduxState } from './reducers';
// counter reducer
export type CounterAction = { type: "incr" | "decr" } | { type: "set", value: number };
export function counterReducer(state = 0, action: CounterAction): number {
  switch (action.type) {
    case "incr": return ++state;
    case "decr": return --state;
    case "set": return action.value;
    default: return state;
  }
}
// counter action
export function incrAction(): CounterAction { return { type: "incr" } }
export function decrAction(): CounterAction { return { type: "decr" } }
export function setCounterFromTimerAction(): ThunkAction<any, ReduxState, any, ReduxAction> {
  return (dispatch, getState) => {
    const { timer } = getState();
    dispatch({ type: "set", value: timer })
  }
}