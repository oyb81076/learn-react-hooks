import { throttle } from "lodash";
import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
function useThrottle<T>(value: T, delay: number): T {
  const [val, setVal] = useState(value);
  const fn = useMemo(() => throttle(setVal, delay), [setVal, delay]);
  useEffect(() => fn.cancel, [fn]);
  useEffect(() => fn(value), [fn, value])
  return val;
}

export default function UseThrottle() {
  const [value, setValue] = useState("default");
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);
  const val = useThrottle(value, 1000);
  return (
    <>
      <div>current value: {value}</div>
      <div>throttle value: {val}</div>
      <input value={value} onChange={onChange} />
    </>
  )
}