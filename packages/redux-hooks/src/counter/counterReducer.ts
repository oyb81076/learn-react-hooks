import { ReduxThunkAction } from '../store/reducers';
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
export function addAction(value: number): ReduxThunkAction {
  return (dispatch, getState) => {
    dispatch({ type: "set", value: getState().counter + value });
  }
}