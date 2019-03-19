import * as React from "react";
const Context = React.createContext({
  count: 0,
  add() { return; }
})
function time() {
  const date = new Date();
  return date.getHours()
    + ":" + date.getMinutes()
    + ":" + date.getSeconds()
    + "." + date.getMilliseconds();
}
function Provider({ children }: { children?: React.ReactNode }) {
  const [count, setCount] = React.useState(0);
  const add = React.useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <>
      <div>Provider: {time()}</div>
      <Context.Provider value={{ count, add }}>{children}</Context.Provider>
    </>
  )
}
function Middle({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <div>Middle: {time()}</div>
      {children}
    </div>
  )
};

function ConsumerCounter() {
  const { count, add } = React.useContext(Context);
  return (
    <>
      <div>ConsumerCounter: {time()}</div>
      <div>{count}</div>
      <button onClick={add}>Add</button>
    </>
  )
}
function PureCounter() {
  const [count, setCount] = React.useState(0);
  const add = React.useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <>
      <div>PureCounter: {time()}</div>
      <div>{count}</div>
      <button onClick={add}>Add</button>
    </>
  )
}
export function ContextRender() {
  return (
    <>
      <div>ContextRender: {time()}</div>
      <Provider>
        <Middle>
          <ConsumerCounter />
        </Middle>
        <Middle>
          <PureCounter />
        </Middle>
      </Provider>
      <summary>
        <p>Root -> Provider -> Middle -> Consumer 的结构下</p>
        <p>当 Provider 中的 state 发生变化的时候</p>
        <p>仅仅 Provider 和 Consumer 会重新渲染</p>
      </summary>
    </>
  )
}