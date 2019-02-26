import * as React from "react";
import { timer } from 'rxjs';
import { useObservable } from "rxjs-hooks";

export default function UseObservable() {
  const count = useObservable(() => timer(0, 1000), 0)
  return <div>interval: {count}</div>
}