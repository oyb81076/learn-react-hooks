import * as React from 'react';
import { Fragment, StrictMode, useCallback, useState } from "react"
import { Batch } from './batch';
import { Counter } from './counter';
import { MapState } from './mapState';
import { MixContextHooks } from './mix-context-hooks';
import { ThunkDispatch } from './thunk-dispatch';
import { TodoList } from './todo-list';
import { Values } from "./values"
export default function App() {
  const [strict, setStrict] = useState(false);
  const openStrict = useCallback(() => setStrict(true), []);
  const cancelStrict = useCallback(() => setStrict(false), []);
  const Root = strict ? StrictMode : Fragment;
  return (
    <Root>
      <div>
        <div>
          <span>Mode: {strict ?  "Strict Mode" : "Not Strict Mode"}</span>
          <span style={{fontSize: "0.8em"}}>Use strict mode will render twice</span>
        </div>
        <button onClick={strict ? cancelStrict : openStrict}>{strict ? "Use": "Cancel"} Strict Mode</button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h1>Todo List</h1>
          <TodoList />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1 }}>
            <h1>Batch</h1>
            <Batch />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1 }}>
            <h1>Counter</h1>
            <Counter />
          </div>
          <div style={{ flex: 1 }}>
            <h1>Values</h1>
            <Values />
          </div>
          <div style={{ flex: 1 }}>
            <h1>Redux Dispatch</h1>
            <ThunkDispatch />
          </div>
          <div style={{ flex: 1 }}>
            <h1>Map State</h1>
            <MapState />
          </div>
          <div style={{ flex: 1 }}>
            <h1>MixContextHooks</h1>
            <MixContextHooks/>
          </div>
         
        </div>
      </div>
    </Root>
  )
}