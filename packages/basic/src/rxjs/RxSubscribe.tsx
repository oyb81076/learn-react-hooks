import * as React from "react";
import { useEffect, useMemo, useState } from 'react';
import { interval, Observable } from 'rxjs';
import { map, share, startWith, timestamp } from 'rxjs/operators';

export function useSubscribe<S, R>(
  pipe: (source$: Observable<S>) => Observable<R>,
  initVal: R,
  source$: Observable<S>,
): R {
  const [val, setVal] = useState(initVal);
  useEffect(() => {
    const ob$ = pipe(source$).subscribe(setVal);
    return () => ob$.unsubscribe();
  }, [source$]);
  return val;
}

export default function RxSubscribe() {
  const [flush, setFlush] = useState(0)
  const source$ = useMemo(() => interval(1000).pipe(startWith(0)).pipe(share()), [flush]);
  const count = useSubscribe((ob$) => ob$, 0, source$)
  const time = useSubscribe((ob$) => ob$.pipe(timestamp()).pipe(map(x => new Date(x.timestamp).toISOString())), "", source$)
  // tslint:disable-next-line:no-console
  console.log(flush, count, time)
  return (
    <>
      <div>count:{count}</div>
      <div>time:{time}</div>
      <button onClick={() => setFlush(Date.now())}>Reset</button>
    </>
  )
}