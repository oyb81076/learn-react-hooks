import * as moment from "moment";
import * as React from "react";

export function RenderDisplay({ name }: { name: string }) {
  const render = React.useRef(0);
  return (<div>[{name}] render count: {++render.current}, last render time: {moment().format("mm:ss.SSS")}</div>);
}