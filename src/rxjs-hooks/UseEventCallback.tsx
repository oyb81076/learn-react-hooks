import * as React from "react";
import { Observable } from 'rxjs';
import { useEventCallback } from 'rxjs-hooks';
import { debounceTime, map } from 'rxjs/operators';
const work = (event$: Observable<React.ChangeEvent<HTMLInputElement>>): Observable<string> => {
  return event$
    .pipe(map((e) => e.target.value))
    .pipe(debounceTime(1000))
}
export default function UseEventCallback() {
  const [handleChange, value] = useEventCallback(work, "init value")
  return (
    <>
      <div>label: {value}</div>
      <input defaultValue={value} onChange={handleChange} />
    </>
  )
}