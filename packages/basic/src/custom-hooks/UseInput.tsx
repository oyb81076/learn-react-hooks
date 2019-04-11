import * as React from "react";
import { ChangeEventHandler, useCallback, useState } from "react";

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);
  return { value, onChange }
}

export default function UseInput() {
  const input = useInput("default");
  return (
    <>
      <div>{input.value}</div>
      <input {...input} />
    </>
  )
}