import * as React from "react"
import { useEffect, useState } from "react"
import { interval } from "rxjs/internal/observable/interval"

export default function RxInterval() {
  const [count, setCount] = useState(0)
  useInterval(setCount);
  return (
    <div>count: {count}</div>
  )
}

function useInterval(setCount: (v: number) => void) {
  useEffect(() => {
    const ob = interval(1000);
    const subscription = ob.subscribe(setCount)
    return () => {
      subscription.unsubscribe()
    }
  }, [])
}