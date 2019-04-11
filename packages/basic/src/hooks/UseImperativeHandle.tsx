import * as React from "react"
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react"
function CounterRef(_: {}, ref: Ref<{ add(): void }>) {
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => ({
    add: () => {
      setCount(count + 1);
    }
  }));
  return <div>Count {count}</div>;
}

const Counter = forwardRef(CounterRef)

export function UseImperativeHandle() {
  const ref = useRef<{ add(): void }>(null)
  const onClick = () => {
    ref.current!.add();
  }
  return (
    <>
      <Counter ref={ref} />
      <button onClick={onClick}>Add</button>
    </>
  )
}