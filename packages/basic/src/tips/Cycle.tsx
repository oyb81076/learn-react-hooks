import * as React from "react";
import { useEffect, useState } from 'react';

export function Cycle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>{count}</div>
  );
}