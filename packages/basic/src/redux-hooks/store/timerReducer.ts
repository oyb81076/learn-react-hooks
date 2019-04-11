// tslint:disable-next-line:interface-name
export interface TimerAction { type: "refresh" }
// timer reducer
export function timerReducer(state = Date.now(), action: TimerAction) {
  switch (action.type) {
    case "refresh": return Date.now();
    default: return state;
  }
}
export function refreshTimerAction(): TimerAction { return { type: "refresh" }; }
