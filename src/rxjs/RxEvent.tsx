import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { fromEvent } from "rxjs/internal/observable/fromEvent"
import { merge } from "rxjs/internal/observable/merge"
import { debounceTime } from "rxjs/internal/operators/debounceTime"
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged"
import { pluck } from "rxjs/internal/operators/pluck"

export default function RxEvent() {
  const [value, setValue] = useState("")
  const el = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const source = merge(
      fromEvent(el.current!, "change"),
      fromEvent(el.current!, "keyup")
        .pipe(debounceTime(1000)),
    )
    const ob = source
      .pipe(pluck<{}, string>("target", "value"))
      .pipe(distinctUntilChanged())
    const subscription = ob.subscribe(setValue)
    return () => subscription.unsubscribe()
  }, [el.current]);
  return (
    <>
      <div>debounce value: {value}</div>
      <input ref={el} defaultValue="" />
    </>
  )
}