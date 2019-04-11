import * as React from "react"
import { useReducer } from "react"
interface IState {
  count: number;
}
interface IAction {
  type: "incr" | "decr"
}
const reducer = ({ count }: IState, action: IAction): IState => {
  switch (action.type) {
    case "incr": return { count: count + 1 }
    case "decr": return { count: count - 1 }
  }
}
const initialState: IState = { count: 0 }
export default function UseReducer() {
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  const incr = () => dispatch({ type: "incr" })
  const decr = () => dispatch({ type: "decr" })
  return (
    <>
      <div>Reducer Count {count}</div>
      <button onClick={incr}>+ 1</button>
      <button onClick={decr}>- 1</button>
    </>
  )
}