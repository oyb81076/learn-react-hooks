import * as React from "react"
import { createContext, useContext, useState } from "react"
const context = createContext({
  count: 0,
  incr() { return; },
  decr() { return; }
})
function Provider({ children }: React.Props<{}>) {
  const { Provider: ContextProvider } = context;
  const [count, setCount] = useState(0)
  const incr = () => setCount(count + 1);
  const decr = () => setCount(count - 1);
  return (
    <ContextProvider value={{ count, incr, decr }}>{children}</ContextProvider>
  )
}

function Handler() {
  const { incr, decr } = useContext(context);
  return (
    <div>
      <button onClick={incr}>+ 1</button>
      <button onClick={decr}>- 1</button>
    </div>
  )
}

function Display() {
  const { count } = useContext(context);
  return (
    <div>count {count}</div>
  )
}

export default function UseContext() {
  return (
    <Provider>
      <div>Use Context</div>
      <Display />
      <Handler />
    </Provider>
  )
}