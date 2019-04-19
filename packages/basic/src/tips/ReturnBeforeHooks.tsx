import * as React from "react";
import { useState } from "react";

export default function ReturnBeforeHooks() {
  const [rtn, setRtn] = useState(true);
  const toggleRtn = React.useCallback(() => setRtn(!rtn), [rtn]);
  if (rtn) {
    return <button onClick={toggleRtn}>Rtn Later</button>
  }
  // an error will occur
  const [counter, setCounter] = useState(0);
  const add = React.useCallback(() => { setCounter(counter + 1) }, [counter]);
  return (
    <>
      <div>{counter}</div>
      <div>{String(rtn)}</div>
      <button onClick={add}>Add</button>
      <button onClick={toggleRtn}>Rtn Before</button>
    </>
  )
}