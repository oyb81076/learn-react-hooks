import * as React from "react";
import { RenderDisplay } from 'src/components/RenderDisplay';
import { useMapState } from 'src/hooks';
import { ReduxState } from 'src/store/reducers';
export function mapStateReducer(state = 1, action: { type: "add_map_state" }) {
  switch (action.type) {
    case "add_map_state": return state + 1;
  }
  return 1;
}
function mapStateValue(state: ReduxState) { return state.mapState; }
export function MapState() {
  const [times, setTimes] = React.useState(1);
  const mapStateResult = React.useCallback((state: ReduxState) => state.mapState * times, [times]);
  const value = useMapState(mapStateValue);
  const result = useMapState(mapStateResult);
  const onClick = React.useCallback(() => setTimes(times + 1), [times])
  return (
    <>
      <RenderDisplay name="MapState" />
      <div>times: {times}, value: {value}, result: {result}</div>
      <button onClick={onClick}>add times</button>
    </>
  );
}