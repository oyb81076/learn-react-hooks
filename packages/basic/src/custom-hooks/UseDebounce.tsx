import * as React from "react";
import { useEffect, useState } from "react";
// debounce比较简单可以直接实现, throttle比较复杂, 需要借助lodash来实现
function useDebounce<T>(value: T, delay: number): T {
  const [val, setVal] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setVal(value), delay)
    return () => {
      clearTimeout(timer);
    }
  }, [value, delay])
  return val;
}

export default function UseDebounce() {
  const [value, setValue] = useState("default");
  const debounceVal = useDebounce(value, 1000);
  return (
    <>
      <div>current value: {value}</div>
      <div>debounce value: {debounceVal}</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
}