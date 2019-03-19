import * as React from "react"
import { ChangeEvent, useCallback, useState } from "react"
let func: any = null;
export default function UseCallback() {
  const [value, setValue] = useState("")
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);
  const diff = func !== null && func !== onChange;
  func = onChange;
  return (
    <div>
      <p>使用 useCallback 接近 useMemo</p>
      <p>useCallback(someFunc, [])</p>
      <p>useMemo(()=> someFunc, [])</p>
      <p>的效果是相同</p>
      <input value={value} onChange={onChange} />
      <div>is function onChange changed: {String(diff)}</div>
    </div>
  )
}