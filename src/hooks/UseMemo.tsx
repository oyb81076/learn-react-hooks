import * as React from "react"
import { useMemo, useState } from "react"

export default function UseMemo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  let computed = false
  const value = useMemo(() => {
    computed = true;
    return count1 * 2
  }, [count1])
  return (
    <div>
      <div>computed: {computed ? "true" : "false"}</div>
      <div>{count1} x 2 = {value}</div>
      <div>{count1} <button onClick={() => setCount1(count1 + 1)}>incr</button></div>
      <div>{count2} <button onClick={() => setCount2(count2 + 1)}>incr</button></div>
    </div>
  )
}