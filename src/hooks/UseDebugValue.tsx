import * as React from "react"
import { useDebugValue, useState } from "react"
export default function UseDebugValue() {
  const [isOnline, setIsOnline] = useState(false)
  useDebugValue("isOnline:" + isOnline)
  return (
    <>
      {isOnline ? "online" : "offline"}
      <div onClick={() => setIsOnline(!isOnline)}>Change</div>
    </>
  )
}