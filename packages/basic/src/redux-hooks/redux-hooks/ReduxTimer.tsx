import * as React from "react"
import { useReduxAction, useReduxState } from '../hooks';
import { RenderDisplay } from '../RenderDisplay';
import { ReduxState } from '../store/reducers';
import { refreshTimerAction } from '../store/timerReducer';
const mapState = (state: ReduxState) => state.timer;
const mapDispatch = (dispatch: any) => ({
  refresh() { dispatch(refreshTimerAction()) }
});
export function ReduxTimer() {
  const timer = useReduxState(mapState);
  const { refresh } = useReduxAction(mapDispatch);
  return (
    <div style={{ marginBottom: 20 }}>
      <RenderDisplay name="ReduxTimer" />
      <div>timer: {timer}</div>
      <button onClick={refresh}>refresh</button>
    </div>
  )
}