import * as React from "react";
function time() {
  const date = new Date();
  return date.getHours()
    + ":" + date.getMinutes()
    + ":" + date.getSeconds()
    + "." + date.getMilliseconds();
}
export function NoneMemo() {
  return (
    <>
      <div>{time()}</div>
      <summary>
        Memo状态下, 不会刷新了, NoneMemo下,
        每次点击菜单, 都会因为 ReactRouter的props注入造成重新渲染
      </summary>
    </>
  );
}

const MemoComp = React.memo(NoneMemo, () => true);
export function Memo() {
  return <MemoComp />;
}
