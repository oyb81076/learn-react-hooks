import * as React from "react";
import { useCallback } from 'react';
import { useDispatch } from '../hooks';
import { ITodoState, updateTodoComplete } from './todoReducer';
export function TodoItem({ data: { id, name, completed } }: { data: { id: number, name: string, completed: boolean } }) {
  const dispatch = useDispatch();
  const onComplete = useCallback(() => dispatch(updateTodoComplete(id, true)), [id]);
  if (completed) {
    return <div style={{ textDecoration: "line-through" }}>{name}</div>
  } else {
    return <div>{name} <button onClick={onComplete}>Complete</button></div>
  }
}

export function TodoItemList({ data }: { data: ITodoState["todos"] }) {
  return (
    <>
      {data.map(x => <TodoItem key={x.id} data={x} />)}
      {data.length === 0 && "no data ...."}
    </>
  )
}