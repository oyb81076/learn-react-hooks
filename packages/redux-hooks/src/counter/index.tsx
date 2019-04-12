import * as React from "react";
import { CounterHandler } from './CounterHandler';
import { CounterView } from './CounterView';

export function Counter() {
  return (
    <>
      <CounterView />
      <CounterHandler />
    </>
  )
}