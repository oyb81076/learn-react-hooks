import * as React from "react"
import { useCallback, useState } from "react";

const useToggle = (initVal: boolean): [boolean, () => void] => {
  const [val, setVal] = useState(initVal);
  const toggle = useCallback(() => setVal(!val), [val])
  return [val, toggle]
}

export default function UseToggle() {
  const [open, toggle] = useToggle(true);
  return (
    <>
      <div>is Open: {String(open)}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}