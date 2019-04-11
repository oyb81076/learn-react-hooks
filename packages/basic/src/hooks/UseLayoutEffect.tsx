import * as React from "react";
import { useEffect, useLayoutEffect, useState } from "react";
const getTime = ()=> {
  const date = new Date();
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
}
export default function UseLayoutEffect() {
  const [value, setValue] = useState(getTime());
  const [sync, setSync] = useState("");
  const [defer, setDefer] = useState("");
  useEffect(()=> {
    setDefer(getTime())
  }, [value])
  useLayoutEffect(() => {
    setSync(getTime())
  }, [value]);
  return (
    <div>
      <p>useLayoutEffect和声明周期直接挂钩, 会阻塞render, useLayoutEffect更多的会用在和渲染相关的地方</p>
      <p>Value: {value}</p>
      <p>Sync: {sync}</p>
      <p>Defer: {defer}</p>
      <button onClick={() => setValue(getTime())}>Click</button>
    </div>
  );
}