import * as React from "react";
import { memo, useState } from "react";
const Memorize = memo<{ count: number }>(({ children, count }) => {
  console.log("render")
  return (
    <div>
      <div>MemoIt</div>
      <div>count: {count}</div>
      <div>{children}</div>
    </div>
  )
});

export default function Memo() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
    <>
      <Memorize count={count} />
      <div> Count: {count}, Other {other}</div>
      <input value={value} onChange={onChange} />
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setOther(other + 1)}>Add Other</button>
    </>
  )
}
