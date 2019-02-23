import * as React from "react"
import { useLayoutEffect, useState } from "react"
export default function ComponentDidMount() {
  const [count, setCount] = useState(0)
  const [mounting, setMounting] = useState<Date | null>(null)
  useLayoutEffect(() => {
    // tslint:disable-next-line:no-console
    console.log("mount");
    setMounting(new Date)
    return ()=> {
      // tslint:disable-next-line:no-console
      console.log("unmount");
    }
  }, [])
  return (
    <div>
      <div>Mounting: {mounting && mounting.toISOString()}</div>
      <div>{count} <button onClick={() => setCount(count + 1)}>incr</button></div>
    </div>
  )
}