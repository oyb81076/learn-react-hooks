import * as React from "react";
import { CounterHandler, ReduxCounter } from './ReduxCounter';
import { ReduxTimer } from './ReduxTimer';

export function ReduxHooks() {
  return (
    <>
      <ReduxCounter />
      <CounterHandler />
      <ReduxTimer />
    </>
  )
}