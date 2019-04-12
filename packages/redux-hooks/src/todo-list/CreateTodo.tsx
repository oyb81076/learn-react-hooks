import * as React from "react";
import { useMapDispatch } from '../hooks';
import { addTodo } from './todoReducer';
export function CreateTodo() {
  const [value, setValue] = React.useState("")
  const ref = React.useRef(value);
  ref.current = value;
  const { add } = useMapDispatch(mapDispatch);
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = React.useCallback((e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    add(ref.current);
    setValue("");
  }, [])
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button>Submit</button>
    </form>
  )
}
function mapDispatch(dispatch: any) {
  return {
    add(value: string) { dispatch(addTodo(value)) }
  }
}