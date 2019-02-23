import * as React from "react";
import { useEffect, useState } from "react";
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title]);
}
const useInputValue = (initValue: string) => {
  const [value, setValue] = useState(initValue)
  const onChange: JSX.IntrinsicElements["input"]["onChange"] = (e) => {
    setValue(e.target.value)
  }
  return { value, onChange }
}
export default function UseEffect() {
  const title = useInputValue(document.title)
  useDocumentTitle(title.value);
  return (
    <div>
      <p>useEffect 会在数据发生变化的时候延迟执行, 不会阻塞渲染, 用在事件系统中(比如rxjs)</p>
      <p>useEffect 和 useLayoutEffect 的对比参见 UseLayoutEffect部分</p>
      <input {...title} />
    </div>
  );
}