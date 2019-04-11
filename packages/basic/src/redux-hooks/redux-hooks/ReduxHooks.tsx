import * as React from "react";
import { TodoList } from '../todo-list';
import { CounterHandler, ReduxCounter } from './ReduxCounter';
import { ReduxTimer } from './ReduxTimer';

export function ReduxHooks() {
  return (
    <>
      <ReduxCounter />
      <CounterHandler />
      <ReduxTimer />
      <TodoList />
    </>
  )
}