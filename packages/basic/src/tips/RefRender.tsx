import * as React from "react";
export function RefRender() {
  const undefinedRef = React.useRef();
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const ref = React.useRef(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      ref.current++;
    }, 200);
    return () => {
      clearInterval(timer);
    }
  }, []);
  const rerender = React.useCallback(() => {
    setTimestamp(Date.now())
  }, [])
  return (
    <>
      <div>{timestamp}</div>
      <div>{ref.current}</div>
      <div>current in React.useRef() => {String("current" in undefinedRef)}</div>
      <button onClick={rerender}>rerender</button>
    </>
  );
}