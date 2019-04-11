import * as React from "react"
import { useRef } from "react"
export default function UseRef() {
  const inputEl = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputEl.current!.focus();
  }
  return (
    <>
      <input ref={inputEl} />
      <button onClick={handleClick}>focus</button>
    </>
  )
}