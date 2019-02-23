import * as React from "react"
import { useCallback, useState } from "react"
let func: any = null;
export default function UseCallback() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const incr1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])
  const diff = incr1 !== func;
  func = incr1
  return (
    <div>
      <div>incr1 changed: {diff ? "true" : "false"}</div>
      <div>{count1} <button onClick={incr1}>incr</button></div>
      <div>{count2} <button onClick={() => setCount2(count2 + 1)}>incr</button></div>
    </div>
  )
}