import * as React from "react"
import { useRef, useState } from "react"
/**
 * 关于多个 state修改和 render次数之间的关系
 */
export function ActionsRender(){
  const count = useRef(1)
  const [num0, setNum0] = useState(0);
  const [num1, setNum1] = useState(0);
  const onClick = React.useCallback(()=> {
    setNum0(Math.random());
    setNum1(Math.random());
  }, []);
  const onFiber = React.useCallback(async ()=> {
    setNum0(Math.random());
    await Promise.resolve();
    setNum1(Math.random());
  }, []);
  return (
    <div>
      <p>renderCount: {count.current++}</p>
      <p>num0: {num0}</p>
      <p>num1: {num1}</p>
      <button onClick={onClick}>change num0 and num1</button>
      <button onClick={onFiber}>change num0 and num1 with fiber</button>
    </div>
  )
}